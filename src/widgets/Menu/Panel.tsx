import React from "react";
import styled from "styled-components";
import LinkList from "./LinkList";
import Footer from "./Footer";
import { NavProps } from "./types";

interface Props extends NavProps {
  isPushed: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.background};
  width: ${({ isPushed }) => (isPushed ? "208px" : 0)};
  height: 100vh;
  padding: 16px 0;
  overflow-y: auto;
  transition: width 0.4s;
  z-index: 11;
  ${({ theme }) => theme.mediaQueries.nav} {
    position: relative;
    width: ${({ isPushed }) => (isPushed ? "208px" : "56px")};
  }
`;

const Panel: React.FC<Props> = ({ isPushed }) => {
  return (
    <StyledPanel isPushed={isPushed}>
      <LinkList isPushed={isPushed} />
      <Footer />
    </StyledPanel>
  );
};

export default Panel;
