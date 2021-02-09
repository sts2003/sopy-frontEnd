import React from "react";
import {
  Wrapper,
  ImageBox,
  CommonBtn,
} from "../../components/commonComponents";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Fade, Bounce } from "react-reveal";

const ViewText = styled.div`
  margin: 6px;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => (props.isTitle ? props.theme.blackColor : ``)};
  color: ${(props) => (props.isAuthor ? props.theme.darkGrayColor : ``)};
  color: ${(props) => (props.isDesc ? props.theme.grayColor : ``)};
`;

const BarWrapper = styled.div`
  width: 1350px;
  height: 10px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.subThemeColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 30px 0px;
`;

const WrapWrapper = styled(Wrapper)`
  width: 1350px;
  flex-wrap: wrap;
`;

const FileInput = styled.input`
  display: none;
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

const Image = styled.img`
  width: 400px;
  height: 400px;
  border: 1px solid #777;
  margin: 10px;
  object-fit: cover;
`;

const RelWrapper = styled(Wrapper)`
  position: relative;
`;

const AbImageBox = styled(ImageBox)`
  position: absolute;
  top: 0;
  left: 0;
`;

const AbWrapper = styled(Wrapper)`
  position: absolute;
  top: 2px;
  right: 2px;
`;

const MM00Presenter = ({
  videoDatum,
  fileChangeHandler,
  imagePath,
  videoDeleteHandler,
  updateHandler,
}) => {
  return (
    <Wrapper>
      <Wrapper height={`400px`} padding={`25px`} dr={`row`}>
        <Fade left>
          <Wrapper al={`flex-end`} padding={`20px`}>
            <ImageBox
              width={`400px`}
              height={`225px`}
              bgImg={
                "https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/SOPY%2FvideoThumbnail%2F%ED%98%B8%EB%82%98%EC%9A%B0%EB%91%90%20%EC%B6%95%EC%8B%A0%EC%A7%A4.png?alt=media&token=1213e064-0c67-4e86-aec6-6e64b96bf705"
              }
            />
          </Wrapper>
        </Fade>
        <Fade right>
          <Wrapper al={`flex-start`} padding={`20px`}>
            <ViewText size={`17px`} weight={`700`} isTitle={true}>
              오민형의 남자가 고백하는법 - 1
            </ViewText>
            <ViewText size={`12px`} weight={`400`} isAuthor={true}>
              오민자
            </ViewText>
            <ViewText size={`13.5px`} weight={`500`} isDesc={true}>
              남자는 자고로 박력이 있어야혀
            </ViewText>
          </Wrapper>
        </Fade>
      </Wrapper>
      <Wrapper>
        <Bounce>
          <BarWrapper />
        </Bounce>
        <Fade bottom>
          <WrapWrapper dr={`row`} margin={`0px 0px 100px 0px`}>
            {videoDatum ? (
              videoDatum.length === 0 ? (
                <Wrapper>미디어 목록이 없습니다.</Wrapper>
              ) : (
                videoDatum.map((data, idx) => {
                  return (
                    <Fade bottom delay={idx * 60} key={idx}>
                      <RelWrapper
                        width={`400px`}
                        height={`225px`}
                        margin={`5px`}
                      >
                        <AbImageBox
                          width={`400px`}
                          height={`225px`}
                          bgImg={data.thumbNailPath}
                        />
                        <AbWrapper width={`60px`} height={`50px`} dr={`row`}>
                          <CommonBtn
                            isUpdate={true}
                            height={`10px`}
                            onClick={() => updateHandler(data._id)}
                          ></CommonBtn>
                          <CommonBtn
                            isDelete={true}
                            height={`10px`}
                            onClick={() => videoDeleteHandler(data._id)}
                          ></CommonBtn>
                        </AbWrapper>
                      </RelWrapper>
                    </Fade>
                  );
                })
              )
            ) : (
              <Wrapper>조회중입니다.</Wrapper>
            )}
          </WrapWrapper>
        </Fade>
      </Wrapper>
      {/* FILE UPLOAD TEST START*/}
      <Image src={imagePath}></Image>
      <FileInput type="file" id="file-js" onChange={fileChangeHandler} />
      <FileLabel htmlFor="file-js">파일 선택</FileLabel>
      {/*파일은 하나밖에 선택이 안되기 때문에 해쉬태그(태그방식)을 사용하고 밑에 +를 누르면 하나씩하나씩 복수로 파일을 처리가 가능함.*/}
      {/* FILE UPLOAD TEST END*/}
      <Wrapper margin={`50px 0px`}>
        <Link to={"/video/upload"}>
          <CommonBtn isCreate={true}>동영상 업로드</CommonBtn>
        </Link>
      </Wrapper>
    </Wrapper>
  );
};

export default MM00Presenter;
