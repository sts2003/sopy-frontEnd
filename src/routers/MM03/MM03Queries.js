import { gql } from "apollo-boost";

export const GET_VIDEO_ONE = gql`
  query getVideoOne($id: String!) {
    getVideoOne(id: $id) {
      _id
      title
      description
      thumbNailPath
    }
  }
`;

export const UPDATE_VIDEO = gql`
  mutation updateVideo(
    $id: String!
    $title: String!
    $description: String!
    $thumbNailPath: String!
  ) {
    updateVideo(
      id: $id
      title: $title
      description: $description
      thumbNailPath: $thumbNailPath
    )
  }
`;
