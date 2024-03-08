import styled from 'styled-components';
import FONTS from '../../styles/fonts';
import COLORS from '../../styles/colors';

export const Container = styled.div`
  position: absolute;
  right: 0px;
  top: 50px;
  width: 25%;

  border-radius: 8px;
  padding: 10px 1px;
  border: 1px solid ${COLORS.gray300};
  background-color: ${COLORS.white};
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  @media (max-width: 960px) {
    left: 0;
  }

  @media (max-width: 568px) {
    width: 60%;
  }

  @media (max-width: 410px) {
    width: 70%;
  }
`;

export const Btn = styled.button`
  padding: 12px 16px;
  display: block;
  cursor: pointer;
  width: 100%;
  ${FONTS.font16_Regular}
  text-align:left;
  &:hover {
    background-color: ${COLORS.gray100};
  }
`;
