import React from "react";
import MM05Presenter from "./MM05Presenter";
import useInput from "../../hooks/useInput";
import { REGIST_USER } from "./MM05Queries";
import { useMutation } from "react-apollo-hooks";

const MM05Container = () => {
  ///////////////////// - VARIABLE - ////////////////////////

  ///////////////////// - USE STATE - ////////////////////////
  const newName = useInput("");
  const newEmail = useInput("");
  const newNickName = useInput("");
  const newMobile = useInput("");
  const newZoneCode = useInput("");
  const newAddress = useInput("");
  const newDetailAddress = useInput("");

  ///////////////////// - USE REF - ////////////////////////

  ///////////////////// - USE CONTEXT - ////////////////////////

  ///////////////////// - USE QUERY - ////////////////////////

  ///////////////////// - USE MUTATION - ////////////////////////
  const [registUserMutation] = useMutation(REGIST_USER);
  ///////////////////// - USE EFFECT - ////////////////////////

  ///////////////////// - USE HANDLER - /////////////////////////

  const registUserHandler = async () => {
    if (!newName.value || newName.value.trim() === "") {
      alert("이름은 필수 입력사항 입니다.");

      return;
    }

    if (!newEmail.value || newEmail.value.trim() === "") {
      alert("이메일은 필수 입력사항 입니다.");

      return;
    }

    if (!newNickName.value || newNickName.value.trim() === "") {
      alert("닉네임은 필수 입력사항 입니다.");

      return;
    }

    if (!newMobile.value || newMobile.value.trim() === "") {
      alert("전화번호는 필수 입력사항 입니다.");

      return;
    }

    if (!newZoneCode.value || newZoneCode.value.trim() === "") {
      alert("주소는 필수 입력사항 입니다.");

      return;
    }

    const { data } = await registUserMutation({
      variables: {
        name: newName.value,
        email: newEmail.value,
        nickName: newNickName.value,
        mobile: newMobile.value,
        zoneCode: newZoneCode.value,
        address: newAddress.value,
        detailAddress: newDetailAddress.value || `-`,
      },
    });
    console.log(data);
  };

  const searchPostHander = () => {
    new daum.Postcode({
      oncomplete: function (data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
        // 예제를 참고하여 다양한 활용법을 확인해 보세요.
        newZoneCode.setValue(data.zonecode);
        newAddress.setValue(data.address);
      },
    }).open();
  };
  return (
    <MM05Presenter
      newName={newName}
      newEmail={newEmail}
      newNickName={newNickName}
      newMobile={newMobile}
      newZoneCode={newZoneCode}
      newAddress={newAddress}
      newDetailAddress={newDetailAddress}
      registUserHandler={registUserHandler}
      searchPostHander={searchPostHander}
    />
  );
};

export default MM05Container;
