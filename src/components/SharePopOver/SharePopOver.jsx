import PopOver from '../PopOver';
import { forwardRef, useState } from 'react';
import { ModalPortal } from '../Portal';
import Toast from '../Toast';
import * as S from './SharePopOverStyled';

const SharePopOver = forwardRef(({ isOpen, style, handleClose }, ref) => {
  const [showToast, setShowToast] = useState(false);

  const handleUrlShare = () => {
    try {
      const copiedText = `${window.location.href}`;
      navigator.clipboard.writeText(copiedText);
      setShowToast(true);
    } catch (error) {
      alert('클립보드 복사에 실패하였습니다.');
    }
    handleClose();
  };

  return (
    <>
      {showToast && (
        <ModalPortal>
          <Toast setShowToast={setShowToast} />
        </ModalPortal>
      )}
      <PopOver popOverRef={ref} isOpen={isOpen} style={style}>
        <S.Container>
          <S.Btn>카카오톡 공유</S.Btn>
          <S.Btn onClick={handleUrlShare}>URL 공유</S.Btn>
        </S.Container>
      </PopOver>
    </>
  );
});

export default SharePopOver;
