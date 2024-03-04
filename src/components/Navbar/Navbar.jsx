import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/rolling_Logo.svg';
import Layout from '../../layout/Layout';
import Buttons from '../Buttons';
import * as S from './NavbarStyled';

const Navbar = () => {
  const currentLocation = useLocation();

  return (
    <S.Nav>
      <Layout>
        <S.Container>
          <S.Ul>
            <li>
              <Link to="/">
                <h1>
                  <img src={logoImg} alt="logoImg" />
                </h1>
              </Link>
            </li>
            <li>
              {currentLocation.pathname !== '/post' && (
                <Link to="/post">
                  <Buttons buttonType="Outlined40">롤링 페이퍼 만들기</Buttons>
                </Link>
              )}
            </li>
          </S.Ul>
        </S.Container>
      </Layout>
    </S.Nav>
  );
};

export default Navbar;
