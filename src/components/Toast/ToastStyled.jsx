import styled, { keyframes } from 'styled-components';
import COLORS from '../../utils/colors';
import FONTS from '../../utils/Fonts';

export const toastUp = keyframes`
    0%{
        bottom:0;
        opacity:0;
    }
    50%{

        opacity: 0.5;
    }
    100%{
        bottom: 70px;
    }
`;

export const toastDown = keyframes`
    0%{
        bottom: 70px;
    }
    50%{
        opacity: 0.5;
    }
    100%{
        bottom:0;
        opacity:0;
    }
`;

export const Container = styled.div`
  display: flex;
  width: 524px;
  height: 64px;
  padding: 19px 30px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  position: fixed;
  left: 50%;
  bottom: 70px;
  transform: translateX(-50%);
  z-index: 9999;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
  color: ${COLORS.white};
  animation: ${(props) => (props.up ? toastUp : toastDown)} 1.1s;
`;

export const Contents = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  ${FONTS.font16_Regular}
`;
