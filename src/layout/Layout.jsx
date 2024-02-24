import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 24px;
`;

export default Layout;
