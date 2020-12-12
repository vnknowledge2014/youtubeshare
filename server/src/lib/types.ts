import { Collection } from "mongodb";

export interface Viewer {
  _id?: string;
  token?: string;
  avatar?: string;
  didRequest: boolean;
}

export interface User {
  _id: string;
  token: string;
  name: string;
  avatar: string;
  contact: string;
  listings: string[];
  authorized?: boolean;
}

export interface Listing {
  _id: string;
  id: string;
  etag: string;
  kind: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  status: Status;
  player: Player;
}

export interface Player {
  embedHtml: string;
}

export interface ContentDetails {
  dimension: string;
  definition: string;
}

export interface Status {
  license: string;
}

export interface Snippet {
  title: string;
  description: string;
  publishedAt: string;
  channelId: string;
  channelTitle: string;
  categoryId: string;
  liveBroadcastContent: string;
  tags: string[];
}

export interface Database {
  users: Collection<User>;
  listings: Collection<Listing>;
}
