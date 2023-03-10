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
