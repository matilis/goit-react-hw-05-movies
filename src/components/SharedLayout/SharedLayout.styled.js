import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Header = styled.header`
  box-shadow: 0px 1px 11px 0px rgba(50, 50, 50, 0.4);

  @media screen and (min-width: 320px) {
    min-width: 320px;
  }

  @media screen and (min-width: 768px) {
    min-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 1280px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin: 0 25px;
  padding: 20px 0;
`;

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 25px;
  font-weight: 600;

  &.active {
    cursor: pointer;
    color: orange;
  }
  @media screen and (min-width: 1280px) {
    font-size: 35px;
    margin-left: 25px;
  }
`;
