import styled from 'styled-components';
import COLORS from '../utils/colors';
import { Link } from 'react-router-dom';
import logoImg from '../assets/rolling_Logo.svg';
import { CreateButton } from './CreateButton';

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Ul>
          <li>
            <Link to="/">
              <h1>
                <img src={logoImg} alt="logoImg" />
              </h1>
            </Link>
          </li>
          <li>
            <CreateButton
              widthOption="auto"
              updownMargin="medium"
              fontColor="gray900"
              fontSize="medium"
              bgColor="white"
              border="gray300"
            >
              롤링 페이퍼 만들기
            </CreateButton>
          </li>
        </Ul>
      </Container>
    </Nav>
  );
};

const Nav = styled.nav`
  border-bottom: 1px solid ${COLORS.gray200};
`;

const Container = styled.div`
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
`;

const Ul = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Navbar;
