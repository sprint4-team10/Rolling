import styled from 'styled-components';
import landing01 from '../assets/covers/landing01.png';
import landing02 from '../assets/covers/landing02.png';
import COLORS from '../utils/colors';

const Main = () => {
  return (
    <Container>
      <Section>
        <Contents>
          <Point>Point. 01</Point>
          <Title>
            누구나 손쉽게, 온라인
            <Br /> 롤링 페이퍼를 만들 수 있어요
          </Title>
          <Description>로그인 없이 자유롭게 만들어요.</Description>
        </Contents>
        <Cover>
          <img src={landing01} alt="landingCover01" />
        </Cover>
      </Section>
      <Section>
        <Contents>
          <Point>Point. 02</Point>
          <Title>
            서로에게 이모지로 감정을
            <Br /> 표현해보세요.
          </Title>
          <Description>롤링 페이퍼에 이모지를 추가할 수 있어요.</Description>
        </Contents>
        <Cover>
          <img src={landing02} alt="landingCover01" />
        </Cover>
      </Section>
      <Button>구경해보기</Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 60px 0;
`;

const Section = styled.section`
  border-radius: 16px;
  background-color: ${COLORS.surface};
  padding: 60px 0px;
  display: flex;
  gap: 88px;
  justify-content: flex-end;
  overflow: hidden;
  margin-bottom: 40px;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }

  &:nth-child(2) {
    flex-direction: row-reverse;
    gap: 0;

    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 80px;
      align-items: center;
    }
  }
`;

const Contents = styled.div``;
const Cover = styled.div``;
const Point = styled.div`
  border-radius: 50px;
  background-color: ${COLORS.purple600};
  color: #fff;
  display: inline-block;
  padding: 6px 12px;
  font-size: 1.4rem;
`;
const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  margin: 20px 0 15px;
`;
const Description = styled.div`
  font-size: 1.8rem;
`;

const Br = styled.br`
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Button = styled.button`
  color: purple;
`;

export default Main;
