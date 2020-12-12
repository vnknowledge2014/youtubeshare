/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { VideoIdsInput } from "./../../../globalTypes";

// ====================================================
// GraphQL mutation operation: ShareVideo
// ====================================================

export interface ShareVideo_shareVideo_snippet {
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

export interface ShareVideo_shareVideo_contentDetails {
  __typename: "ContentDetails";
  dimension: string;
  definition: string;
}

export interface ShareVideo_shareVideo_status {
  __typename: "Status";
  license: string;
}

export interface ShareVideo_shareVideo_player {
  __typename: "Player";
  embedHtml: string;
}

export interface ShareVideo_shareVideo {
  __typename: "Listing";
  _id: string;
  id: string;
  etag: string;
  kind: string;
  snippet: ShareVideo_shareVideo_snippet;
  contentDetails: ShareVideo_shareVideo_contentDetails;
  status: ShareVideo_shareVideo_status;
  player: ShareVideo_shareVideo_player;
}

export interface ShareVideo {
  shareVideo: ShareVideo_shareVideo;
}

export interface ShareVideoVariables {
  input?: VideoIdsInput | null;
}
