import styled from 'styled-components';
import COLORS from '../../../../styles/colors';

export const Header = styled.header`
  position: relative;
  z-index: 10;
  background-color: ${COLORS.white};
`;

export const Headings = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Title = styled.div`
  font-size: 1.8rem;
`;
export const Contents = styled.div`
  display: flex;
  position: relative;
`;
export const Recipient = styled.h2``;
export const Reactions = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  border-right: 2px solid ${COLORS.gray200};
  border-left: 2px solid ${COLORS.gray200};
  margin-left: 20px;
  padding-right: 20px;
  padding-left: 20px;
  @media (max-width: 960px) {
    padding-left: 0;
    padding-right: 10px;
    gap: 5px;
  }
`;

export const MoreBtn = styled.button`
  display: flex;
`;

export const ShareBtn = styled.button`
  border: 1px solid ${COLORS.gray300};
  padding: 6px 16px;
  display: flex;
  font-size: 1.6rem;
  gap: 5px;
  align-items: center;
  border-radius: 6px;
  font-weight: 500;
  @media (max-width: 960px) {
    padding: 3px 8px;
    font-size: 1.2rem;
  }
`;

export const Share = styled.div`
  padding-left: 28px;
  @media (max-width: 960px) {
    padding-left: 10px;
  }
`;
