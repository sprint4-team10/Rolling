import styled from 'styled-components';
import CardList from './components/Card/CardList/CardLIst';
import Card from './components/Card/Card/Card';

const List = () => {
  const getBackgroundColor = (index) => {
    const colors = ['#ecd9ff', '#FFE2AD', '#B1E4FF', '#D0F5C3'];
    return colors[index % colors.length];
  };

  const cardsMockData = [
    { id: 1, name: 'To. Sowon', peopleNumber: '10' },
    { id: 2, name: 'To. Sowon', peopleNumber: '20' },
    { id: 3, name: 'To. Sowon', peopleNumber: '30' },
    { id: 4, name: 'To. Sowon', peopleNumber: '40' },
  ];

  return (
    <div>
      <Container>
        <Content>
          <Title>인기 롤링 페이퍼 🔥</Title>
          <CardList>
            {cardsMockData.map((card, index) => (
              <Card
                key={card.id}
                title={card.name}
                peopleNumber={card.peopleNumber}
                backgroundColor={getBackgroundColor(index)}
              />
            ))}
          </CardList>
        </Content>

        <Content>
          <Title>최근에 만든 롤링 페이퍼 ⭐️️</Title>
          <CardList>
            {cardsMockData.map((card, index) => (
              <Card
                key={card.id}
                title={card.name}
                peopleNumber={card.peopleNumber}
                backgroundColor={getBackgroundColor(index)}
                backgroundImage={card.image}
              />
            ))}
          </CardList>
        </Content>

        <Button>나도 만들어보기</Button>
      </Container>
    </div>
  );
};

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    align-items: start;
    margin: 0 auto;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    align-items: start;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.6rem;
  letter-spacing: -0.024rem;
`;

const Button = styled.button`
  width: 28rem;
  margin: 6.4rem auto 0 auto;
  padding: 1.4rem;
  background-color: #9935ff;
  border-radius: 1.2rem;
  color: #fff;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 72rem;
    padding: 1.4rem 2.4rem;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 32rem;
  }
`;

export default List;
