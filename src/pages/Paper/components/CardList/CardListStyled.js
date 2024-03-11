import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(30rem, 33.33333%));
  gap: 2.4rem;

  @media (max-width: 1184px) {
    grid-template-columns: repeat(2, minmax(30rem, 50%));
    gap: 2rem;
  }

  @media (max-width: 685px) {
    grid-template-columns: repeat(1, minmax(30rem, 100%));
    gap: 1.6rem;
  }
`;

export const Card = styled.div`
  height: 29rem;
  background-color: #fff;
  border-radius: 16px;
  padding: 30px;
`;

export const EmptyCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
