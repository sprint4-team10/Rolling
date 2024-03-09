import styled from 'styled-components';
import COLORS from '../../../../styles/colors';

export const Check = styled.div`
  min-width: 4.4rem;
  min-height: 4.4rem;
  padding: 1rem;
  background-color: ${COLORS.gray500};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
