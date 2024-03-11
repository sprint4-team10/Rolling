import styled from 'styled-components';
import COLORS from '../../styles/colors';

const bgColor = {
  beige: COLORS.orange200,
  purple: COLORS.purple200,
  blue: COLORS.blue200,
  green: COLORS.green200,
};

export const Cover = styled.img`
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100%;
  // top: 140px;
  top: 0;
`;

export const PaperContents = styled.div`
  background-color: ${(props) => bgColor[props.recipientinfo.backgroundColor]};
  min-height: 100vh;
  z-index: 1;
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  padding: 80px 0;
`;
