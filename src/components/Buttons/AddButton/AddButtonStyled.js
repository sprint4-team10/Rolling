import styled from 'styled-components';
import COLORS from '../../../utils/colors';

export const AddButtonContainer = styled.button`
  padding: 1.6rem;
  background-color: ${COLORS.gray500};
  border-radius: 10rem;

  &:disabled {
    background-color: ${COLORS.gray300};
  }

  &:hover {
    background-color: ${COLORS.gray600};
  }

  &:active {
    background-color: ${COLORS.gray700};
  }

  &:focus {
    background-color: ${COLORS.gray800};
  }
`;
