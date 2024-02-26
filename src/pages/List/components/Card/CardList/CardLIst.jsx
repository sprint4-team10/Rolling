import styled from 'styled-components';

const CardList = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.6rem;
`;

export default CardList;
