import { gql } from "@apollo/client";

export const LISTINGS = gql`
  query GetListingVideo($limit: Int!, $page: Int!) {
    getListingVideo(limit: $limit, page: $page) {
      total
      result {
        _id
        id
        etag
        kind
        snippet {
          title
          description
          channelId
          channelTitle
          categoryId
          tags
          publishedAt
          liveBroadcastContent
        }
        contentDetails {
          dimension
          definition
        }
        status {
          license
        }
        player {
          embedHtml
        }
      }
    }
  }
`;
