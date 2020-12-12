import { gql } from "@apollo/client";

export const LISTING = gql`
  mutation ShareVideo($input: VideoIdsInput) {
    shareVideo(input: $input) {
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
`;
