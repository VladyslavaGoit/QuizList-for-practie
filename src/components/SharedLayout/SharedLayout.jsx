import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container, LayoutGrid } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <main>
        <LayoutGrid>
          <Outlet />
        </LayoutGrid>
      </main>
      <footer>
        <LayoutGrid>
          <p>Here will be a footer soon</p>
        </LayoutGrid>
      </footer>
    </Container>
  );
};
