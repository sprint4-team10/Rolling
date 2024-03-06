import styled from 'styled-components';
import FONTS from '../../../utils/Fonts';
import COLORS from '../../../utils/colors';

export const SelectBox = styled.div`
  position: relative;
  width: ${({ width }) => width || '32rem'};
  padding: 1.2rem 1.6rem;
  color: ${COLORS.gray500};
  background-color: ${COLORS.white};
  border-radius: 0.8rem;
  border: 0.1rem solid ${({ isError }) => (isError ? COLORS.error : COLORS.gray300)};
  transition: border 0.2s ease-in-out;
  cursor: pointer;

  &::before {
    content: '⌵';
    position: absolute;
    top: ${({ $isOpen }) => ($isOpen ? '1.5rem' : '0.1rem')};
    right: 1.6rem;
    color: ${COLORS.gray900};
    font-size: 3rem;
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'none')};
  }

  &:focus {
    border: 0.1rem solid ${({ $isError }) => ($isError ? COLORS.error : COLORS.gray500)};
  }
`;

export const Label = styled.label`
  font-size: 1.6rem;
  color: ${COLORS.gray900};
  ${FONTS.font16_Regular}
`;

export const SelectOptions = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  overflow: hidden;
  margin-top: 5.8rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${COLORS.gray300};
  background-color: ${COLORS.white};
  color: ${COLORS.gray900};
  z-index: 1;
`;

export const Option = styled.li`
  padding: 1.2rem 1.6rem;
  ${FONTS.font16_Regular}
  font-size: 1.6rem;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: ${COLORS.gray100};
  }
`;
