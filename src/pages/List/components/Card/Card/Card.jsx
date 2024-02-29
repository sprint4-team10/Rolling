import { Link } from 'react-router-dom';
import CardContent from '../CardContent/CardContent';
import styled, { css } from 'styled-components';
import COLORS from '../../../../../utils/colors';
import pattern1 from '../../../../../assets/pattern/pattern_01.svg';
import pattern2 from '../../../../../assets/pattern/pattern_02.svg';
import pattern3 from '../../../../../assets/pattern/pattern_03.svg';
import pattern4 from '../../../../../assets/pattern/pattern_04.svg';

const cardColor = {
  beige: COLORS.orange200,
  purple: COLORS.purple200,
  blue: COLORS.blue200,
  green: COLORS.green200,
};

const cardPattern = {
  beige: pattern2,
  purple: pattern1,
  blue: pattern3,
  green: pattern4,
};

const Card = ({ id, title, backgroundColor, backgroundImageURL, messageCount, messages, topReactions }) => {
  console.log('backImgUrl:', backgroundImageURL);
  return (
    <Link to={`/post/${id}`}>
      <Wrapper backgroundImageUrl={backgroundImageURL} backgroundColor={backgroundColor}>
        {!backgroundImageURL && <PatternImg src={cardPattern[backgroundColor]} alt="pattern" />}
        <CardContentWrapper>
          <CardContent
            title={title}
            messageCount={messageCount}
            messages={messages}
            backgroundImageURL={backgroundImageURL}
            topReactions={topReactions}
          />
        </CardContentWrapper>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 27.5rem;
  height: 26rem;
  padding: 3rem 2.4rem;
  border-radius: 1.6rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  background-size: cover; // 이미지가 컴포넌트 크기에 맞게 조절될 수 있도록
  background-position: center; // 이미지가 가운데 정렬되도록
  box-shadow: 0rem 0.2rem 1.2rem 0rem rgba(0, 0, 0, 0.08);
  min-width: 27.5rem;
  min-height: 26rem;
  transition: transform 0.2s ease;
  overflow: hidden;

  &:hover {
    transform: scale(0.95) translateZ(0); /* hover 상태에서 요소 위로 올라감 */
  }

  ${(props) =>
    props.backgroundImageUrl &&
    css`
      background-image: url('${props.backgroundImageUrl}');
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 1.6rem;
      }
    `}

  ${(props) =>
    !props.backgroundImageURL &&
    css`
      background-color: ${cardColor[props.backgroundColor]};
    `}
`;

const CardContentWrapper = styled.div`
  position: relative;
`;

const PatternImg = styled.img`
  position: absolute;
  z-index: -1;
  right: 0;
  bottom: 0;
`;

export default Card;
