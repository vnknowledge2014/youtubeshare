import dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import rateLimit from "express-rate-limit";
import * as helmet from "helmet";
import * as fs from "fs";
import * as path from "path";
import * as https from "https";
import * as http from "http";
import cookieParser from "cookie-parser";
import { ApolloServer } from "apollo-server-express";
import { connectDatabase } from "./database";
import { typeDefs, resolvers } from "./graphql";

const mount = async (app: Application) => {
  const db = await connectDatabase();

  const credentials = {
    key: fs.readFileSync(`${path.resolve("cert/server.key")}`),
    cert: fs.readFileSync(`${path.resolve("cert/server.crt")}`),
  };

  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: [
          "'self'",
          "data:",
          "'unsafe-inline'",
          "cdn.jsdelivr.net",
          "w3.org",
        ],
        styleSrc: [
          "'self'",
          "'unsafe-inline'",
          "unpkg.com",
          "cdn.jsdelivr.net",
          "fonts.googleapis.com",
          "use.fontawesome.com",
          "w3.org",
        ],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-eval'",
          "js.stripe.com",
          "cdn.jsdelivr.net",
          "w3.org",
        ],
        frameSrc: ["'self'", "js.stripe.com"],
        fontSrc: [
          "'self'",
          "fonts.googleapis.com",
          "fonts.gstatic.com",
          "use.fontawesome.com",
          "cdn.joinhoney.com",
          "w3.org",
        ],
        upgradeInsecureRequests: [],
      },
    })
  );
  app.use(helmet.dnsPrefetchControl());
  app.use(helmet.expectCt());
  app.use(helmet.frameguard());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.hsts());
  app.use(helmet.ieNoOpen());
  app.use(helmet.noSniff());
  app.use(helmet.permittedCrossDomainPolicies());
  app.use(helmet.referrerPolicy());
  app.use(helmet.xssFilter());

  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 1000, // limit each IP to 100 requests per windowMs
    })
  );

  app.set("trust proxy", 1);

  app.use(cookieParser(process.env.SECRET));

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ db, req, res }),
  });

  server.applyMiddleware({ app, cors: true, path: "/api" });

  const httpServer = http.createServer(app);
  const httpsServer = https.createServer(credentials, app);
  
  httpServer.listen(process.env.PORT);
  httpsServer.listen(process.env.TLS_PORT);

  console.log(`[app] : http://localhost:${process.env.PORT}`);
  console.log(`[app] : https://localhost:${process.env.TLS_PORT}`);
};

mount(express());
