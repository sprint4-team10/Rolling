import styled from 'styled-components';
import COLORS from '../../styles/colors';
import FONTS from '../../styles/fonts';

export const Deem = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
  background: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 16px;
  background: ${COLORS.white};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  padding: 40px;
  box-sizing: border-box;
  ${FONTS.font16_Regular}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  @media (max-width: 630px) {
    width: 400px;
  }
`;
