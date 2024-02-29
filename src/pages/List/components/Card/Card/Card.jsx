import { Link } from 'react-router-dom';
import CardContent from '../CardContent/CardContent';
import styled, { css } from 'styled-components';

const Card = ({ id, title, backgroundColor, backgroundImageURL, messageCount, messages, topReactions }) => {
  return (
    <Link to={`/post/${id}`}>
      <Wrapper backgroundImageURL={backgroundImageURL} backgroundColor={backgroundColor}>
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

  &:hover {
    transform: scale(0.95) translateZ(0); /* hover 상태에서 요소 위로 올라감 */
  }

  ${(props) =>
    props.backgroundImageURL &&
    css`
      background-image: url(${props.backgroundImageURL});
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: -;
        border-radius: 1.6rem;
      }
    `}

  ${(props) =>
    !props.backgroundImageURL &&
    css`
      background-color: ${props.backgroundColor};
    `}
`;

const CardContentWrapper = styled.div`
  position: relative;
  z-index: 2; /* 가상 요소의 z-index보다 높은 값으로 설정하여 가상 요소 위에 표시 */
`;

export default Card;
