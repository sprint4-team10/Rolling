import styled from 'styled-components';
import COLORS from '../../../../styles/colors';
import FONTS from '../../../../styles/fonts';

export const InputBox = styled.input`
  max-width: 72rem;
  width: 100%;
  padding: 1.2rem 1.6rem;
  border: 0.1rem solid ${COLORS.gray300};
  border-radius: 0.8rem;
`;
export const MainDescription = styled.h2`
  ${FONTS.font24_Bold}
  color: ${COLORS.gray900};
`;
export const SendToInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.4rem;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  ${FONTS.font12_Regular}
  color: ${COLORS.error};
  visibility: ${({ $isError }) => ($isError ? 'visible' : 'hidden')};
`;
