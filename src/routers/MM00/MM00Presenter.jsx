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

const MM00Presenter = () => {
  return (
    <Wrapper>
      <Wrapper height={`400px`} padding={`25px`} dr={`row`}>
        <Fade left>
          <Wrapper al={`flex-end`} padding={`20px`}>
            <ImageBox
              width={`400px`}
              height={`225px`}
              bgImg={`https://postfiles.pstatic.net/MjAyMDA4MjFfMTAw/MDAxNTk4MDAxNDQ0MTYw.p3x8aJ2oJN-lj8melH252u_tsBQQ1umVQ2nvowdkKysg.Jpmw0nU3XRJaZjGDNZRIqnhQ7WEdXzLriA0vGywYTnYg.JPEG.hwisung5688/output_1332215625.jpg?type=w966`}
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
            <ImageBox
              width={`320px`}
              height={`180px`}
              margin={`5px`}
              bgImg={`https://postfiles.pstatic.net/MjAyMDA4MjFfMTAw/MDAxNTk4MDAxNDQ0MTYw.p3x8aJ2oJN-lj8melH252u_tsBQQ1umVQ2nvowdkKysg.Jpmw0nU3XRJaZjGDNZRIqnhQ7WEdXzLriA0vGywYTnYg.JPEG.hwisung5688/output_1332215625.jpg?type=w966`}
            />
            <ImageBox
              width={`320px`}
              height={`180px`}
              margin={`5px`}
              bgImg={`https://postfiles.pstatic.net/MjAyMDA4MjFfMTAw/MDAxNTk4MDAxNDQ0MTYw.p3x8aJ2oJN-lj8melH252u_tsBQQ1umVQ2nvowdkKysg.Jpmw0nU3XRJaZjGDNZRIqnhQ7WEdXzLriA0vGywYTnYg.JPEG.hwisung5688/output_1332215625.jpg?type=w966`}
            />

            <ImageBox
              width={`320px`}
              height={`180px`}
              margin={`5px`}
              bgImg={`https://postfiles.pstatic.net/MjAyMDA4MjFfMTAw/MDAxNTk4MDAxNDQ0MTYw.p3x8aJ2oJN-lj8melH252u_tsBQQ1umVQ2nvowdkKysg.Jpmw0nU3XRJaZjGDNZRIqnhQ7WEdXzLriA0vGywYTnYg.JPEG.hwisung5688/output_1332215625.jpg?type=w966`}
            />

            <ImageBox
              width={`320px`}
              height={`180px`}
              margin={`5px`}
              bgImg={`https://postfiles.pstatic.net/MjAyMDA4MjFfMTAw/MDAxNTk4MDAxNDQ0MTYw.p3x8aJ2oJN-lj8melH252u_tsBQQ1umVQ2nvowdkKysg.Jpmw0nU3XRJaZjGDNZRIqnhQ7WEdXzLriA0vGywYTnYg.JPEG.hwisung5688/output_1332215625.jpg?type=w966`}
            />
          </WrapWrapper>
        </Fade>
      </Wrapper>
    </Wrapper>
  );
};

export default MM00Presenter;
