import styled from 'styled-components';

const CardList = ({ children, slideX }) => {
  return <Wrapper slide={slideX}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.6rem;
  transform: translateX(${(props) => props.slide}px);
  transition: all 0.2s;
`;

export default CardList;
