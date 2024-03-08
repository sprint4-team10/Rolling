import styled from 'styled-components';

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 24px;
`;

export default Layout;
