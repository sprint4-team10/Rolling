import CardContent from '../CardContent/CardContent';
import styled from 'styled-components';

const Card = ({ title, backgroundColor, peopleNumber }) => {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <CardContent title={title} peopleNumber={peopleNumber} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 27.5rem;
  height: 26rem;
  padding: 3rem 2.4rem;
  border-radius: 1.6rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  background: ${(props) => props.backgroundColor || '#fff'};
  background-size: cover; // 이미지가 컴포넌트 크기에 맞게 조절될 수 있도록
  background-position: center; // 이미지가 가운데 정렬되도록
  box-shadow: 0rem 0.2rem 1.2rem 0rem rgba(0, 0, 0, 0.08);
  min-width: 27.5rem; /* 최소 너비를 원래 크기로 설정 */
  min-height: 26rem; /* 최소 높이를 원래 크기로 설정 */
`;

export default Card;
