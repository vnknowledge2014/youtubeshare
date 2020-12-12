import { gql } from "@apollo/client";

export const USER = gql`
  query User($id: ID!, $limit: Int!, $page: Int!) {
    user(id: $id) {
      id
      name
      avatar
      contact
      listings(limit: $limit, page: $page) {
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
  }
`;
