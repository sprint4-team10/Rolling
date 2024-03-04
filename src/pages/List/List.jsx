import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRecipientList } from '../../api/api';
import styled from 'styled-components';
import Layout from '../../layout/Layout';
import CardList from './components/Card/CardList/CardLIst';
import Card from './components/Card/Card/Card';
import arrowRightIcon from '../../assets/icons/arrow_right.svg';
import arrowLeftIcon from '../../assets/icons/arrow_left.svg';
import COLORS from '../../utils/colors';
import FONTS from '../../utils/Fonts';
import Buttons from '../../components/Buttons/Buttons';

const List = () => {
  const [recipientList, setRecipientList] = useState([]);
  const [popularRecipientList, setPopularRecipientList] = useState([]);
  const [topSlideX, setTopSlideX] = useState(0);
  const [bottomSlideX, setBottomSlideX] = useState(0);
  const recipientListWidth = useRef();

  const topContainerRef = useRef(null);
  const bottomContainerRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [clickPoint, setClickPoint] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  const handleMouseDownEvent = (e, containerRef) => {
    if (window.innerWidth <= 1190) {
      setDragging(true);
      if (containerRef.current) {
        setClickPoint(e.pageX);
        setScrollLeft(containerRef.current.scrollLeft);
      }
    }
  };

  const handleMouseMoveEvent = (e, containerRef) => {
    if (!dragging) return;
    e.preventDefault();
    if (containerRef.current) {
      const walk = e.pageX - clickPoint;
      const speedCoefficient = 0.5; // 이동 속도를 조절하는 계수 (수를 조정하여 속도 조절 가능)
      containerRef.current.scrollLeft = scrollLeft - walk * speedCoefficient;
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
            <CardListContainer
              ref={topContainerRef}
              onMouseDown={(e) => handleMouseDownEvent(e, topContainerRef)}
              onMouseLeave={() => setDragging(false)}
              onMouseUp={() => setDragging(false)}
              onMouseMove={(e) => handleMouseMoveEvent(e, topContainerRef)}
            >
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
            <CardListContainer
              ref={bottomContainerRef}
              onMouseDown={(e) => handleMouseDownEvent(e, bottomContainerRef)}
              onMouseLeave={() => setDragging(false)}
              onMouseUp={() => setDragging(false)}
              onMouseMove={(e) => handleMouseMoveEvent(e, bottomContainerRef)}
            >
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

        <ButtonContainer>
          <Link to="/post">
            <Buttons buttonType="Primary56" buttonSize="small">
              나도 만들어보기
            </Buttons>
          </Link>
        </ButtonContainer>
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 5rem;
`;

const Title = styled.div`
  ${FONTS.font24_Bold}
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6.4rem;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    display: flex;
    justify-content: center;
  }
`;

export default List;
