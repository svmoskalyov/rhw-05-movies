import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  padding: ${p => p.theme.space[2]}px;
  border-radius: 4px;
  border: 1px solid black;
  text-decoration: none;
  color: ${p => p.theme.colors.text};

  :hover,
  :focus-visible {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`;

export const SubNavItem = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  min-width: 80px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};

  :hover,
  :focus-visible {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const Subtitle = styled.h3`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const Text = styled.p`
  padding-bottom: ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  text-indent: 30px;
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Subtext = styled.span`
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
`;
