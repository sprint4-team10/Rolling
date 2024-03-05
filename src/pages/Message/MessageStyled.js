import styled from 'styled-components';
import COLORS from '../../utils/colors';
import FONTS from '../../utils/Fonts';

export const Container = styled.form`
  max-width: 72rem;
  padding: 5rem 0 6rem 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  gap: 5rem;
`;

export const Title = styled.h2`
  margin-bottom: 1.2rem;
  ${FONTS.font24_Bold}
  ${COLORS.gray900}
`;

export const EnterContentWrapper = styled.div`
  margin-bottom: 5rem;
`;
