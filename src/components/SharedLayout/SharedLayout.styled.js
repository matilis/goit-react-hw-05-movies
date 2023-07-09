import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Header = styled.header`
  box-shadow: 0px 1px 11px 0px rgba(50, 50, 50, 0.4);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  margin-left: 25px;
  padding: 20px 0;
`;

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;

  &.active {
    cursor: pointer;
    color: orange;
  }
`;
