import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.theme.mainThemeColor};
  color: ${(props) => props.theme.whiteColor};
  box-shadow: ${(props) => props.theme.boxShadow};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 40px;
`;

const InnerWrapper = styled.div`
  width: ${(props) => props.width || `98%`};
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ActionSpan = styled.span`
  padding: 5px;
  margin: 5px;
  color: ${(props) => props.theme.whiteColor};
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: ${(props) => props.theme.pointColor};
  }
`;

const Header = ({ history }) => {
  const moveLinkHandler = (link) => {
    history.push(link);
  };

  return (
    <HeaderWrapper>
      <InnerWrapper width={`200px`}></InnerWrapper>
      <InnerWrapper>
        <ActionSpan onClick={() => moveLinkHandler("/")}>LOGO</ActionSpan>
      </InnerWrapper>
      <InnerWrapper width={`200px`}>
        <ActionSpan onClick={() => moveLinkHandler("/signin")}>
          SIGN IN
        </ActionSpan>
        <ActionSpan onClick={() => moveLinkHandler("/signup")}>
          SIGN UP
        </ActionSpan>
      </InnerWrapper>
    </HeaderWrapper>
  );
};

export default Header;
