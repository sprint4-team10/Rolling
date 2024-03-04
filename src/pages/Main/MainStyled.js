import styled from 'styled-components';
import COLORS from '../../utils/colors';

export const Container = styled.div`
  padding: 60px 0;
`;

export const Section = styled.section`
  border-radius: 16px;
  background-color: ${COLORS.surface};
  padding: 60px 0px;
  display: flex;
  gap: 88px;
  justify-content: flex-end;
  overflow: hidden;
  margin-bottom: 40px;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }

  &:nth-child(2) {
    flex-direction: row-reverse;
    gap: 0;

    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 80px;
      align-items: center;
    }
  }
`;

export const Contents = styled.div``;
export const Cover = styled.div``;
export const Point = styled.div`
  border-radius: 50px;
  background-color: ${COLORS.purple600};
  color: #fff;
  display: inline-block;
  padding: 6px 12px;
  font-size: 1.4rem;
`;
export const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  margin: 20px 0 15px;
`;
export const Description = styled.div`
  font-size: 1.8rem;
`;

export const Br = styled.br`
  @media (max-width: 1200px) {
    display: none;
  }
`;
