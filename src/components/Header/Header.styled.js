import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: lightslategrey;
`;

export const HeaderContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  padding: 0 15px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 16px 0;
  color: lightskyblue;
`;
