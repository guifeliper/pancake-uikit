import React from "react";
import noop from "lodash/noop";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Menu";
import { LangType } from "./types";

export default {
  title: "Menu",
  component: Menu,
  argTypes: {},
};

const langs: LangType[] = [
  { code: "en", language: "English" },
  { code: "ar", language: "العربية" },
  { code: "ca", language: "Català" },
  { code: "zh-CN", language: "简体中文" },
  { code: "zh-TW", language: "繁體中文" },
  { code: "cs", language: "Čeština" },
];

export const Connected: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu
        account="0xbdda50183d817c3289f895a4472eb475967dc980"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang="EN"
        cakePriceUsd={0.23158668932877668}
      >
        <div>
          <h1>Page body</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
      </Menu>
    </BrowserRouter>
  );
};

export const NotConnected: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu
        account={null}
        login={noop}
        logout={() => null}
        isDark={false}
        toggleTheme={() => null}
        langs={langs}
        setLang={() => null}
        currentLang="EN"
        cakePriceUsd={0.23158668932877668}
      />
    </BrowserRouter>
  );
};
