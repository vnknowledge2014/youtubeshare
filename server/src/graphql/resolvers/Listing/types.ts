import { Listing } from "../../../lib/types";

export interface YouTubeIdArgs {
  input: { ids: string[] };
}

export interface YouTubeSearchArgs extends YouTubeListingArgs {
  input: { title: string };
}

export interface YouTubeListingArgs {
  limit: number;
  page: number; 
} 

export interface YouTubeListingData {
  total: number;
  result: Listing[];
}