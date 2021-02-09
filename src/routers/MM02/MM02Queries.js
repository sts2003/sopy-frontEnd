import { gql } from "apollo-boost";

export const REGIST_VIDEO = gql`
  mutation registVideo(
    $title: String!
    $thumbNailPath: String!
    $description: String!
  ) {
    registVideo(
      title: $title
      thumbNailPath: $thumbNailPath
      description: $description
    )
  }
`;
