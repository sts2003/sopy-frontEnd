import React from "react";
import {
  Wrapper,
  ImageBox,
  CommonBtn,
} from "../../components/commonComponents";
import styled from "styled-components";

const TextInput = styled.input`
  width: ${(props) => props.width || `300px`};
  height: ${(props) => props.height || `50px`};
`;

const FileInputNone = styled.input`
  width: 500px;
  background-color: ${(props) => props.theme.lightGrayColor};
`;

const FileInput = styled.input`
  display: none;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  border: 1px solid #777;
  margin: 10px;
  object-fit: cover;
`;

const FileLabel = styled.label`
  width: 120px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.checkColor};
  color: #fff;
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 5px;
  border-radius: ${(props) => props.theme.radius};
`;

const MM02Presenter = ({
  fileChangeHandler,
  imagePath,
  newTitle,
  newDesc,
  registHandler,
}) => {
  return (
    <Wrapper>
      <Wrapper dr={`row`}>
        <Wrapper>
          <Wrapper>
            <Image src={imagePath} />
          </Wrapper>
          <Wrapper dr={`row`}>
            <FileInputNone readOnly={true} value={imagePath} />
            <FileInput
              type="file"
              id="file-js"
              onChange={fileChangeHandler}
              accept=".png, .jpg, .jpeg"
            />
            <FileLabel htmlFor="file-js">파일 선택</FileLabel>
          </Wrapper>
        </Wrapper>
        <Wrapper>
          <Wrapper margin={`50px 0px`}>
            <Wrapper>
              <TextInput placeholder={`title....`} {...newTitle} />
            </Wrapper>
            <Wrapper>
              <TextInput
                placeholder={`desc....`}
                height={`300px`}
                {...newDesc}
              />
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper margin={`50px 0px`}>
        <CommonBtn isCreate={true} onClick={registHandler}>
          비디오 올리기
        </CommonBtn>
      </Wrapper>
    </Wrapper>
  );
};

export default MM02Presenter;
