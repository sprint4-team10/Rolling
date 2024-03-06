import styled from 'styled-components';
import COLORS from '../../../utils/colors';

export const ToggleButtons = styled.div`
  background-color: ${COLORS.gray100};
  border-radius: 0.8rem;
`;

export const SelectButton = styled.button`
  display: inline-block;
  min-width: 12.2rem;
  max-width: 12rem;
  padding: 0.7rem 1.6rem;
  color: ${({ isBgType }) => (isBgType === true ? COLORS.purple700 : COLORS.gray900)};
  text-align: center;
  font-size: 1.6rem;
  font-weight: ${({ isBgType }) => (isBgType === true ? 700 : 400)};
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
  border-radius: 0.8rem;
  background-color: ${({ isBgType }) => (isBgType === true ? COLORS.white : COLORS.gray100)};
  border: 0.2rem solid ${({ isBgType }) => (isBgType === true ? COLORS.purple700 : COLORS.gray100)};

  &:focus {
    background-color: ${COLORS.white};
    border: 0.2rem solid ${COLORS.purple700};
    color: ${COLORS.purple700};
    font-weight: 700;
  }
`;
