import styled from 'styled-components';
import COLORS from '../../../../styles/colors';
import FONTS from '../../../../styles/fonts';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3.2rem;
`;

export const Preview = styled.img``;

export const ProfileCandidates = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`;

export const ImgContainer = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  flex-shrink: 0;
  overflow: hidden;
  cursor: pointer;
  position: relative;
`;

export const Deem = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.3;
`;

export const CheckIcon = styled.img`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PreviewContent = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background-color: blue;
  flex-shrink: 0;
  overflow: hidden;
`;

export const ImgSelectContent = styled.div``;

export const Title = styled.p`
  color: ${COLORS.gray500};
  ${FONTS.font16_Regular}
  margin-bottom: 1rem;
`;
