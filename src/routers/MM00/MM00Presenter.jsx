import React from "react";
import { Wrapper, ImageBox } from "../../components/commonComponents";
import styled from "styled-components";
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

const MM00Presenter = ({ videoDatum }) => {
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
            ></ImageBox>
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
                      <ImageBox
                        width={`400px`}
                        height={`225px`}
                        margin={`5px`}
                        bgImg={data.thumbNailPath}
                      />
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
    </Wrapper>
  );
};

export default MM00Presenter;
