import styled from 'styled-components';
import PopOver from '../PopOver';
import { forwardRef } from 'react';
import COLORS from '../../utils/colors';
import FONTS from '../../utils/Fonts';

const SharePopOver = forwardRef(({ isOpen, style, handleClose }, ref) => {
  const handleUrlShare = () => {
    try {
      const copiedText = `${window.location.href}`;
      navigator.clipboard.writeText(copiedText);
      console.log(copiedText);
      //토스트 UI 나오게
      alert('클립보드에 복사되었습니다.');
    } catch (error) {
      alert('클립보드 복사에 실패하였습니다.');
    }
    handleClose();
  };

  return (
    <PopOver popOverRef={ref} isOpen={isOpen} style={style}>
      <Container>
        <Btn>카카오톡 공유</Btn>
        <Btn onClick={handleUrlShare}>URL 공유</Btn>
      </Container>
    </PopOver>
  );
});

const Container = styled.div`
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

const Btn = styled.button`
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

export default SharePopOver;
