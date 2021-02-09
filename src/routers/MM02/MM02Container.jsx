import React, { useState } from "react";
import MM02Presenter from "./MM02Presenter";
import useInput from "../../hooks/useInput";
import { REGIST_VIDEO } from "./MM02Queries";
import { useMutation } from "react-apollo-hooks";
import storageRef from "../../firebase";

const MM02Container = ({ history }) => {
  ///////////////////// - VARIABLE - ////////////////////////

  ///////////////////// - USE STATE - ////////////////////////
  const [imagePath, setImagePath] = useState(``);
  const newTitle = useInput(``);
  const newDesc = useInput(``);

  ///////////////////// - USE REF - ////////////////////////

  ///////////////////// - USE CONTEXT - ////////////////////////

  ///////////////////// - USE QUERY - ////////////////////////

  ///////////////////// - USE MUTATION - ////////////////////////
  const [registVideoMutation] = useMutation(REGIST_VIDEO);

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

      setImagePath(url);
    } catch (e) {}
  };

  const registHandler = async () => {
    const { data } = await registVideoMutation({
      variables: {
        thumbNailPath: imagePath,
        title: newTitle.value,
        description: newDesc.value,
      },
    });

    if (data.registVideo) {
      alert("영상 업로드 성공");
      history.push("/");
    } else {
      alert("영상 업로드 실패");
    }
  };
  return (
    <MM02Presenter
      fileChangeHandler={fileChangeHandler}
      registHandler={registHandler}
      imagePath={imagePath}
      newTitle={newTitle}
      newDesc={newDesc}
    />
  );
};

export default MM02Container;
