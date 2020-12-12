/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { VideoSearchInput } from "./../../../globalTypes";

// ====================================================
// GraphQL query operation: SearchVideo
// ====================================================

export interface SearchVideo_searchVideo_result_snippet {
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

export interface SearchVideo_searchVideo_result_contentDetails {
  __typename: "ContentDetails";
  dimension: string;
  definition: string;
}

export interface SearchVideo_searchVideo_result_status {
  __typename: "Status";
  license: string;
}

export interface SearchVideo_searchVideo_result_player {
  __typename: "Player";
  embedHtml: string;
}

export interface SearchVideo_searchVideo_result {
  __typename: "Listing";
  _id: string;
  id: string;
  etag: string;
  kind: string;
  snippet: SearchVideo_searchVideo_result_snippet;
  contentDetails: SearchVideo_searchVideo_result_contentDetails;
  status: SearchVideo_searchVideo_result_status;
  player: SearchVideo_searchVideo_result_player;
}

export interface SearchVideo_searchVideo {
  __typename: "Listings";
  total: number;
  result: SearchVideo_searchVideo_result[];
}

export interface SearchVideo {
  searchVideo: SearchVideo_searchVideo;
}

export interface SearchVideoVariables {
  input: VideoSearchInput;
  limit: number;
  page: number;
}
