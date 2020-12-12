import { gql } from "@apollo/client";

export const LISTING = gql`
  query SearchVideo($input: VideoSearchInput!, $limit: Int!, $page: Int!) {
    searchVideo(input: $input, limit: $limit, page: $page) {
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
