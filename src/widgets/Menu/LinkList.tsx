import React, { AnchorHTMLAttributes } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { SvgProps } from "../../components/Svg";
import * as IconModule from "./icons";
import config from "./config";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

interface Props {
  isPushed: boolean;
}

const LinkBlock = styled.div`
  display: flex;
  flex-direction: column;
  .link {
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 48px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;

const LinkLabel = styled.div<Props>`
  color: ${({ isPushed, theme }) => (isPushed ? theme.colors.textSubtle : "transparent")};
  transition: color 0.4s;
`;

const MenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href = "", children, ...props }) => {
  return href.startsWith("http") ? (
    <a key={href} className="link" href={href} {...props}>
      {children}
    </a>
  ) : (
    <NavLink key={href} className="link" to={href} {...props}>
      {children}
    </NavLink>
  );
};

const Panel: React.FC<Props> = ({ isPushed }) => {
  return (
    <LinkBlock>
      {config.map((entry) => {
        const Icon = Icons[entry.icon];
        return (
          <MenuLink key={entry.label} href={entry.href}>
            {Icon && <Icon color="textSubtle" width="24px" mr="8px" style={{ flexShrink: 0 }} />}
            <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
          </MenuLink>
        );
      })}
    </LinkBlock>
  );
};

export default Panel;
