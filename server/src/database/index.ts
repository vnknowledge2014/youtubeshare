import { MongoClient } from "mongodb";
import { Database, User, Listing } from "../lib/types";

const url = `${process.env.MONGODB}`;
console.log(url);

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db(`${process.env.MONGODB_DB_NAME}`);

  return {
    users: db.collection<User>(`${process.env.MONGODB_COLLECTION_USERS}`),
    listings: db.collection<Listing>(`${process.env.MONGODB_COLLECTION_LISTINGS}`)
  };
};
