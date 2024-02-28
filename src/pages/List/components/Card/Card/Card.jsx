import { Link } from 'react-router-dom';
import CardContent from '../CardContent/CardContent';
import styled, { css } from 'styled-components';

const Card = ({ id, title, backgroundColor, backgroundImageURL, messageCount, messages, topReactions }) => {
  return (
    <Link to={`/post/${id}`}>
      <Wrapper backgroundImageUrl={backgroundImageURL} backgroundColor={backgroundColor}>
        <CardContent
          title={title}
          messageCount={messageCount}
          messages={messages}
          backgroundImageURL={backgroundImageURL}
          topReactions={topReactions}
        />
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  width: 27.5rem;
  height: 26rem;
  padding: 3rem 2.4rem;
  border-radius: 1.6rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  background-size: cover; // 이미지가 컴포넌트 크기에 맞게 조절될 수 있도록
  background-position: center; // 이미지가 가운데 정렬되도록
  box-shadow: 0rem 0.2rem 1.2rem 0rem rgba(0, 0, 0, 0.08);
  min-width: 27.5rem; /* 최소 너비를 원래 크기로 설정 */
  min-height: 26rem; /* 최소 높이를 원래 크기로 설정 */

  ${(props) =>
    props.backgroundImageUrl &&
    css`
      background-image: url(${props.backgroundImageUrl});
    `}

  ${(props) =>
    !props.backgroundImageUrl &&
    css`
      background-color: ${props.backgroundColor};
    `}
`;

export default Card;
