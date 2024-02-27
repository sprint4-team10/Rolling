import { useEffect, useState } from 'react';
import { getRecipientList } from '../../api/api';
import styled from 'styled-components';
import CardList from './components/Card/CardList/CardLIst';
import Card from './components/Card/Card/Card';
import Layout from '../../layout/Layout';

const List = () => {
  const [recipientList, setRecipientList] = useState([]);
  const [popularRecipientList, setPopularRecipientList] = useState([]);

  const handleLoadRecipientList = async (options) => {
    const data = await getRecipientList(options);
    console.log(data);
    setRecipientList(data.results);
    // 새로운 배열로 popularRecipientList 업데이트
    setPopularRecipientList([...data.results]);
  };

  useEffect(() => {
    handleLoadRecipientList();
  }, []);

  return (
    <Layout>
      <Container>
        <Content>
          <Title>인기 롤링 페이퍼 🔥</Title>
          <CardList>
            {popularRecipientList
              // reactionCount를 기준으로 내림차순 정렬
              .sort((a, b) => b.reactionCount - a.reactionCount)
              // 정렬된 결과를 매핑하여 각각의 카드를 생성
              .map((card) => (
                <Card
                  key={card.id}
                  title={card.name}
                  backgroundColor={card.backgroundColor}
                  backgroundImageURL={card.backgroundImageURL}
                  messageCount={card.messageCount}
                  messages={card.recentMessages}
                  topReactions={card.topReactions}
                />
              ))}
          </CardList>
        </Content>

        <Content>
          <Title>최근에 만든 롤링 페이퍼 ⭐️️</Title>

          <CardList>
            {recipientList.map((card) => (
              <Card
                key={card.id}
                title={card.name}
                backgroundColor={card.backgroundColor}
                backgroundImageURL={card.backgroundImageURL}
                messageCount={card.messageCount}
                messages={card.recentMessages}
                topReactions={card.topReactions}
              />
            ))}
          </CardList>
        </Content>

        <Button>나도 만들어보기</Button>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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
  align-items: start;
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
