/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetListingVideo
// ====================================================

export interface GetListingVideo_getListingVideo_result_snippet {
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

export interface GetListingVideo_getListingVideo_result_contentDetails {
  __typename: "ContentDetails";
  dimension: string;
  definition: string;
}

export interface GetListingVideo_getListingVideo_result_status {
  __typename: "Status";
  license: string;
}

export interface GetListingVideo_getListingVideo_result_player {
  __typename: "Player";
  embedHtml: string;
}

export interface GetListingVideo_getListingVideo_result {
  __typename: "Listing";
  _id: string;
  id: string;
  etag: string;
  kind: string;
  snippet: GetListingVideo_getListingVideo_result_snippet;
  contentDetails: GetListingVideo_getListingVideo_result_contentDetails;
  status: GetListingVideo_getListingVideo_result_status;
  player: GetListingVideo_getListingVideo_result_player;
}

export interface GetListingVideo_getListingVideo {
  __typename: "Listings";
  total: number;
  result: GetListingVideo_getListingVideo_result[];
}

export interface GetListingVideo {
  getListingVideo: GetListingVideo_getListingVideo;
}

export interface GetListingVideoVariables {
  limit: number;
  page: number;
}
