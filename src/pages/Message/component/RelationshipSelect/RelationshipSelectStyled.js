import styled from 'styled-components';
import COLORS from '../../../../utils/colors';
import FONTS from '../../../../utils/Fonts';

export const ErrorMessage = styled.p`
  ${FONTS.font12_Regular}
  color: ${COLORS.error};
  visibility: ${({ isError }) => (isError ? 'visible' : 'hidden')};
  margin-top: 0.4rem;
`;
