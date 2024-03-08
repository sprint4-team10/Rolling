import styled from 'styled-components';
import COLORS from '../../../../styles/colors';
import FONTS from '../../../../styles/fonts';

export const ErrorMessage = styled.p`
  ${FONTS.font12_Regular}
  color: ${COLORS.error};
  visibility: ${({ $isError }) => ($isError ? 'visible' : 'hidden')};
  margin-top: 0.4rem;
`;
