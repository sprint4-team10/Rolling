import { useEffect, useRef, useState } from 'react';
import { getRecipientList } from '../../api/api';
import styled from 'styled-components';
import CardList from './components/Card/CardList/CardLIst';
import Card from './components/Card/Card/Card';
import Layout from '../../layout/Layout';
import arrowRightIcon from '../../assets/icons/arrow_right.svg';
import arrowLeftIcon from '../../assets/icons/arrow_left.svg';
import COLORS from '../../utils/colors';

const List = () => {
  const [recipientList, setRecipientList] = useState([]);
  const [popularRecipientList, setPopularRecipientList] = useState([]);
  const [topSlideX, setTopSlideX] = useState(0);
  const [bottomSlideX, setBottomSlideX] = useState(0);
  const recipientListWidth = useRef();

  const handleLoadRecipientList = async (options) => {
    const data = await getRecipientList(options);
    setRecipientList(data.results);
    setPopularRecipientList([...data.results]);
    const w = data.results.length - 1;
    recipientListWidth.current = -(w * 275 + w * 20) + 1160;
  };

  const handleSlideLeftClick = (e) => {
    if (e.target.id === 'top') {
      if (topSlideX < 0) {
        setTopSlideX((slideX) => slideX + 295);
      }
    } else {
      if (bottomSlideX < 0) {
        setBottomSlideX((slideX) => slideX + 295);
      }
    }
  };

  const handleSlideRightClick = (e) => {
    if (e.target.id === 'top') {
      if (recipientListWidth.current <= topSlideX) {
        setTopSlideX((slideX) => slideX - 295);
      }
    } else {
      if (recipientListWidth.current <= bottomSlideX) {
        setBottomSlideX((slideX) => slideX - 295);
      }
    }
  };

  useEffect(() => {
    handleLoadRecipientList();
  }, []);

  return (
    <Layout>
      <Container>
        <Content>
          <Title>인기 롤링 페이퍼 🔥</Title>
          <Wrapper>
            {topSlideX < 0 && (
              <LeftBtn onClick={handleSlideLeftClick} id="top">
                <img src={arrowLeftIcon} alt="arrowLeftIcon" id="top" />
              </LeftBtn>
            )}
            {topSlideX > recipientListWidth.current && (
              <RightBtn onClick={handleSlideRightClick} id="top">
                <img src={arrowRightIcon} alt="arrowRightIcon" id="top" />
              </RightBtn>
            )}
            <CardListContainer>
              <CardList slideX={topSlideX}>
                {popularRecipientList
                  // reactionCount를 기준으로 내림차순 정렬
                  .sort((a, b) => b.reactionCount - a.reactionCount)
                  // 정렬된 결과를 매핑하여 각각의 카드를 생성
                  .map((card) => (
                    <Card
                      key={card.id}
                      id={card.id}
                      title={card.name}
                      backgroundColor={card.backgroundColor}
                      backgroundImageURL={card.backgroundImageURL}
                      messageCount={card.messageCount}
                      messages={card.recentMessages}
                      topReactions={card.topReactions}
                    />
                  ))}
              </CardList>
            </CardListContainer>
          </Wrapper>
        </Content>

        <Content>
          <Title>최근에 만든 롤링 페이퍼 ⭐️️</Title>
          <Wrapper>
            {bottomSlideX < 0 && (
              <LeftBtn onClick={handleSlideLeftClick} id="bottom">
                <img src={arrowLeftIcon} alt="arrowLeftIcon" id="bottom" />
              </LeftBtn>
            )}
            {bottomSlideX > recipientListWidth.current && (
              <RightBtn onClick={handleSlideRightClick} id="bottom">
                <img src={arrowRightIcon} alt="arrowRightIcon" id="bottom" />
              </RightBtn>
            )}
            <CardListContainer>
              <CardList slideX={bottomSlideX}>
                {recipientList.map((card) => (
                  <Card
                    key={card.id}
                    id={card.id}
                    title={card.name}
                    backgroundColor={card.backgroundColor}
                    backgroundImageURL={card.backgroundImageURL}
                    messageCount={card.messageCount}
                    messages={card.recentMessages}
                    topReactions={card.topReactions}
                  />
                ))}
              </CardList>
            </CardListContainer>
          </Wrapper>
        </Content>

        <Button>나도 만들어보기</Button>
      </Container>
    </Layout>
  );
};

const Wrapper = styled.div`
  position: relative;
  max-width: 1160px;
  @media (max-width: 1190px) {
    width: calc(100vw - 4.8rem);
  }
`;

const CardListContainer = styled.div`
  overflow: hidden;
  @media (max-width: 1190px) {
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Btn = styled.button`
  position: absolute;
  z-index: 10;
  top: 48%;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.gray300};
  opacity: 0.8;

  @media (max-width: 1190px) {
    display: none;
  }
`;

const LeftBtn = styled(Btn)`
  left: -20px;
`;

const RightBtn = styled(Btn)`
  right: -20px;
`;

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
