import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "../../components/Svg";
import Overlay from "../../components/Overlay/Overlay";
import Logo from "./icons/Logo";
import MenuButton from "./MenuButton";
import Panel from "./Panel";
import { NavProps } from "./types";

const Wrapper = styled.div`
  position: relative;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 18px;
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.nav.background};
  z-index: 11;
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: absolute;
  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  children,
}) => {
  const [isPushed, setIsPushed] = useState(false);

  return (
    <Wrapper>
      <StyledNav>
        <MenuButton aria-label="Toggle menu" onClick={() => setIsPushed((prevState) => !prevState)} mr="24px">
          <HamburgerIcon />
        </MenuButton>
        <Link to="/" aria-label="Pancake home page">
          <Logo isDark={isDark} width="160px" height="100%" />
        </Link>
      </StyledNav>
      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          account={account}
          login={login}
          logout={logout}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          cakePriceUsd={cakePriceUsd}
        />
        {children}
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
