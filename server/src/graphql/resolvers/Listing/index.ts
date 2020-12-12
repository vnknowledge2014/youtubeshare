import { IResolvers } from "apollo-server-express";
import { Google } from "../../../lib/api";
import { authorize, formatYoutubeData } from "../../../lib/utils";
import {
  YouTubeIdArgs,
  YouTubeListingArgs,
  YouTubeListingData,
  YouTubeSearchArgs,
} from "../Listing/types";
import { Database, Listing } from "./../../../lib/types";
import { Request } from "express";

export const listingResolvers: IResolvers = {
  Query: {
    searchVideo: async (
      _root: undefined,
      { input, limit, page }: YouTubeSearchArgs,
      { db }: { db: Database }
    ): Promise<YouTubeListingData | null> => {
      try {
        const data: YouTubeListingData = {
          total: 0,
          result: [],
        };

        let cursor = await db.listings.find({
          $text: {
            $search: input.title,
          },
        });

        cursor = cursor.skip(page > 0 ? (page - 1) * limit : 0);
        cursor = cursor.limit(limit);

        data.total = await cursor.count();
        data.result = await cursor.toArray();

        return data;
      } catch (error) {
        throw new Error(`Failed to query youtube video listings: ${error}`);
      }
    },
    getListingVideo: async (
      _root: undefined,
      { limit, page }: YouTubeListingArgs,
      { db }: { db: Database }
    ): Promise<YouTubeListingData | null> => {
      try {
        const data: YouTubeListingData = {
          total: 0,
          result: [],
        };

        let cursor = await db.listings.find().sort({
          "_id": -1
        });

        cursor = cursor.skip(page > 0 ? (page - 1) * limit : 0);
        cursor = cursor.limit(limit);

        data.total = await cursor.count();
        data.result = await cursor.toArray();

        return data;
      } catch (error) {
        throw new Error(`Failed to query youtube video listings: ${error}`);
      }
    },
  },
  Mutation: {
    shareVideo: async (
      _root: undefined,
      { input }: YouTubeIdArgs,
      { db, req }: { db: Database; req: Request }
    ): Promise<Listing | null> => {
      try {
        const viewer = await authorize(db, req);

        if (!viewer) {
          throw new Error("viewer cannot be found");
        }

        const youtubeData = await Google.getYoutubeVideo(input.ids);

        const [mapYoutubeData] = JSON.parse(
          JSON.stringify(youtubeData.youtube.items)
        );

        await db.listings.createIndex({
          "snippet.title": "text",
          "snippet.description": "text",
        });

        const updateListing = await db.listings.updateOne(
          {
            id: formatYoutubeData(mapYoutubeData).id,
          },
          {
            $set: {
              ...formatYoutubeData(mapYoutubeData),
            },
          },
          { upsert: true }
        );

        if (updateListing.matchedCount === 0) {
          const listing = await db.listings.findOne({
            id: formatYoutubeData(mapYoutubeData).id,
          });
          
          listing ? 
          await db.users.updateOne(
            { _id: viewer._id },
            { $push: { listings: listing._id} }
          ): null;

          return listing;
        }

        return null;
      } catch (error) {
        throw new Error(`Failed to share youtube video: ${error}`);
      }
    },
  },
  Listing: {
    _id: (listing: Listing): string => {
      return listing._id;
    },
  },
};
