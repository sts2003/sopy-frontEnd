import React, { useState } from "react";
import { useQuery } from "react-apollo-hooks";
import MM00Presenter from "../MM00/MM00Presenter";
import { GET_ALL_VIDEOS } from "./MM00Queries";
import storageRef from "../../../src/firebase";

const MM00Container = () => {
  ///////////////////// - VARIABLE - ////////////////////////

  ///////////////////// - USE STATE - ////////////////////////
  const [imagePath, setImagePath] = useState(``);
  ///////////////////// - USE REF - ////////////////////////

  ///////////////////// - USE CONTEXT - ////////////////////////

  ///////////////////// - USE QUERY - ////////////////////////
  const {
    data: videoDatum,
    loading: videoLoading,
    refetch: videoRefetch,
  } = useQuery(GET_ALL_VIDEOS);

  console.log(videoDatum && videoDatum.getAllVideos);
  ///////////////////// - USE MUTATION - ////////////////////////

  ///////////////////// - USE EFFECT - ////////////////////////

  const fileChangeHandler = async (e) => {
    console.log(e.target.files[0]);
    const originFile = e.target.files[0];
    const originFileName = e.target.files[0].name;

    console.log(originFile);
    console.log(originFileName);
    // event는 변하기 때문에 어딘가에 저장을 해줘야한다. -> 밑에서 사용해야하기 때문에 이벤트가 바뀌기 전에 따로 저장해준다
    const D = new Date();

    const year = D.getFullYear() + "";
    const month = D.getMonth() + 1 + "";
    const date = D.getDate() + "";
    //겟 데이트는 현재 날자
    // 겟 데이는 현재 요일
    const hour = D.getHours() + "";
    const min = D.getMinutes() + "";
    const sec = D.getSeconds() + "";

    const suffix = year + month + date + hour + min + sec;

    const uploadFileName = originFileName + suffix;
    // 이것이 들어가는 데이터 이름이다. 중복이 되지 않기 때문(suffix를 달아줬기 때문에)

    try {
      const storage = storageRef.child(
        `SOPY/uploads/thumbNail/${uploadFileName}`
      );
      await storage.put(originFile);
      const url = await storage.getDownloadURL();

      setImagePath(url);
    } catch (e) {}
    // catch를 잡을 때 콘솔로그를 찍으면 사용자에게 에러가 보이기 때문에 사용 X
  };
  return (
    <MM00Presenter
      videoDatum={videoDatum && videoDatum.getAllVideos}
      fileChangeHandler={fileChangeHandler}
      imagePath={imagePath}
    />
  );
};

export default MM00Container;
