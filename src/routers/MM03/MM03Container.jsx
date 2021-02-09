import React, { useState } from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import { GET_VIDEO_ONE, UPDATE_VIDEO } from "./MM03Queries";
import MM03Presenter from "./MM03Presenter";
import useInput from "../../hooks/useInput";
import storageRef from "../../firebase";

const MM03Container = ({ history, match }) => {
  ///////////////////// - VARIABLE - ////////////////////////

  const videoId = match.params.id;

  ///////////////////// - USE STATE - ////////////////////////
  const modifyThumbNail = useInput("");
  const modifyTitle = useInput("");
  const modifyDesc = useInput("");
  const [dataFlag, setDataFlag] = useState(true);

  ///////////////////// - USE REF - ////////////////////////

  ///////////////////// - USE CONTEXT - ////////////////////////

  ///////////////////// - USE QUERY - ////////////////////////
  const {
    data: videoDetailData,
    loading: videoDetailLoading,
    refetch: videoDetailRefetch,
  } = useQuery(GET_VIDEO_ONE, {
    variables: {
      id: videoId,
    },
  });

  if (!videoDetailLoading) {
    if (dataFlag) {
      modifyThumbNail.setValue(videoDetailData.getVideoOne.thumbNailPath);
      modifyTitle.setValue(videoDetailData.getVideoOne.title);
      modifyDesc.setValue(videoDetailData.getVideoOne.description);

      setDataFlag(false);
    }
  }
  ///////////////////// - USE MUTATION - ////////////////////////
  const [modifyVideoMutation] = useMutation(UPDATE_VIDEO);

  ///////////////////// - USE EFFECT - ////////////////////////

  const fileChangeHandler = async (e) => {
    console.log(e.target.files[0]);
    const originFile = e.target.files[0];
    const originFileName = e.target.files[0].name;

    console.log(originFile);
    console.log(originFileName);

    const D = new Date();

    const year = D.getFullYear() + "";
    const month = D.getMonth() + 1 + "";
    const date = D.getDate() + "";

    const hour = D.getHours() + "";
    const min = D.getMinutes() + "";
    const sec = D.getSeconds() + "";

    const suffix = year + month + date + hour + min + sec;

    const uploadFileName = originFileName + suffix;

    try {
      const storage = storageRef.child(
        `SOPY/uploads/thumbNail/${uploadFileName}`
      );
      await storage.put(originFile);
      const url = await storage.getDownloadURL();

      modifyThumbNail.setValue(url);
    } catch (e) {}
  };

  const modifyVideoHandler = async (id) => {
    const { data } = await modifyVideoMutation({
      variables: {
        id: videoId,
        title: modifyTitle.value,
        thumbNailPath: modifyThumbNail.value,
        description: modifyDesc.value,
      },
    });

    if (data.updateVideo) {
      alert("게시글이 수정되었습니다.");
      history.push("/");
    }
  };

  return (
    <MM03Presenter
      videoDetailData={videoDetailData && videoDetailData.getVideoOne}
      modifyThumbNail={modifyThumbNail}
      fileChangeHandler={fileChangeHandler}
      modifyTitle={modifyTitle}
      modifyDesc={modifyDesc}
      modifyVideoHandler={modifyVideoHandler}
    />
  );
};

export default MM03Container;
