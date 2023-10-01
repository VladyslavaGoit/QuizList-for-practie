import {
  HeaderContainer,
  Navigation,
  NavList,
  StyledHeader,
  StyledNavLink,
} from './Header.styled';
import { HiOutlineHome } from 'react-icons/hi';

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <HeaderContainer>
          <Navigation>
            <StyledNavLink to="/">
              <HiOutlineHome size={25} />
            </StyledNavLink>
            <NavList>
              <li>
                <StyledNavLink to="/quizzes">Quizzes List</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/create">Create new quiz</StyledNavLink>
              </li>
            </NavList>
          </Navigation>
        </HeaderContainer>
      </StyledHeader>
    </>
  );
};
