"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql `
  type User {
    id: ID!
    name: String!
    avatar: String!
    contact: String!
    listings(limit: Int!, page: Int!): Listings!
  }
  
  type Listings {
    total: Int!
    result: [Listing!]!
  }

  type Listing {
    _id: ID!
    id: String!
    etag: String!
    kind: String!
    snippet: Snippet!
    contentDetails: ContentDetails!
    status: Status!
    player: Player!
  }

  type Player {
    embedHtml: String!
  }

  type ContentDetails {
    dimension: String!
    definition: String!
  }

  type Status {
    license: String!
  }

  type Snippet {
    title: String!
    description: String!
    publishedAt: String!
    channelId: String!
    channelTitle: String!
    categoryId: String!
    liveBroadcastContent: String!
    tags: [String!]!
  }

  type Viewer {
    id: ID
    token: String
    avatar: String
    didRequest: Boolean!
  }

  input LogInInput {
    code: String!
  }

  input VideoIdsInput {
    ids: [String!]!
  }

  input VideoSearchInput {
    title: String!
  }

  type Query {
    authUrl: String!
    user(id: ID!): User!
    searchVideo(input: VideoSearchInput!, limit: Int!, page: Int!): Listings!
    getListingVideo(limit: Int!, page: Int!): Listings!
  }

  type Mutation {
    logIn(input: LogInInput): Viewer!
    logOut: Viewer!
    shareVideo(input: VideoIdsInput): Listing!
  }
`;
