import landing01 from '../../assets/covers/landing01.png';
import landing02 from '../../assets/covers/landing02.png';
import Layout from '../../layout/Layout';
import { Link } from 'react-router-dom';
import Buttons from '../../components/Buttons';
import * as S from './MainStyled';

const Main = () => {
  return (
    <S.Container>
      <Layout>
        <S.Section>
          <S.Contents>
            <S.Point>Point. 01</S.Point>
            <S.Title>
              누구나 손쉽게, 온라인
              <S.Br /> 롤링 페이퍼를 만들 수 있어요
            </S.Title>
            <S.Description>로그인 없이 자유롭게 만들어요.</S.Description>
          </S.Contents>
          <S.Cover>
            <img src={landing01} alt="landingCover01" />
          </S.Cover>
        </S.Section>
        <S.Section>
          <S.Contents>
            <S.Point>Point. 02</S.Point>
            <S.Title>
              서로에게 이모지로 감정을
              <S.Br /> 표현해보세요.
            </S.Title>
            <S.Description>롤링 페이퍼에 이모지를 추가할 수 있어요.</S.Description>
          </S.Contents>
          <S.Cover>
            <img src={landing02} alt="landingCover01" />
          </S.Cover>
        </S.Section>
        <Link to="/list">
          <div style={{ textAlign: 'center' }}>
            <Buttons buttonType="Primary56" buttonSize="small" tabletButtonSize="full">
              구경해보기
            </Buttons>
          </div>
        </Link>
      </Layout>
    </S.Container>
  );
};

export default Main;
