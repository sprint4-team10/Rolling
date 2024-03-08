import styled from 'styled-components';
import FONTS from '../../styles/fonts';

export const BadgeContainer = styled.div`
  ${FONTS.font14_Regular}
  display: inline-flex;
  padding: 0rem 0.8rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
`;
