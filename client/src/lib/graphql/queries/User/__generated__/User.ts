/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: User
// ====================================================

export interface User_user_listings_result_snippet {
  __typename: "Snippet";
  title: string;
  description: string;
  channelId: string;
  channelTitle: string;
  categoryId: string;
  tags: string[];
  publishedAt: string;
  liveBroadcastContent: string;
}

export interface User_user_listings_result_contentDetails {
  __typename: "ContentDetails";
  dimension: string;
  definition: string;
}

export interface User_user_listings_result_status {
  __typename: "Status";
  license: string;
}

export interface User_user_listings_result_player {
  __typename: "Player";
  embedHtml: string;
}

export interface User_user_listings_result {
  __typename: "Listing";
  _id: string;
  id: string;
  etag: string;
  kind: string;
  snippet: User_user_listings_result_snippet;
  contentDetails: User_user_listings_result_contentDetails;
  status: User_user_listings_result_status;
  player: User_user_listings_result_player;
}

export interface User_user_listings {
  __typename: "Listings";
  total: number;
  result: User_user_listings_result[];
}

export interface User_user {
  __typename: "User";
  id: string;
  name: string;
  avatar: string;
  contact: string;
  listings: User_user_listings;
}

export interface User {
  user: User_user;
}

export interface UserVariables {
  id: string;
  limit: number;
  page: number;
}
