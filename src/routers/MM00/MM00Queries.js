import { gql } from "apollo-boost";

export const GET_ALL_VIDEOS = gql`
  query getAllVideos {
    getAllVideos {
      _id
      title
      description
      thumbNailPath
    }
  }
`;
