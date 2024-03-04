import completedIcon from '../../assets/icons/completed.svg';
import cancleIcon from '../../assets/icons/sharp_X.svg';
import { useEffect, useState } from 'react';
import * as S from './ToastStyled';

const Toast = ({ setShowToast }) => {
  const [up, setUp] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setUp(false);
    }, 2000);
    const t2 = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      <S.Container up={up} setup={setUp}>
        <S.Contents>
          <img src={completedIcon} alt="checkIcon" />
          URL이 복사 되었습니다.
        </S.Contents>
        <button onClick={() => setShowToast(false)}>
          <img src={cancleIcon} alt="cancelIcon" />
        </button>
      </S.Container>
    </>
  );
};

export default Toast;
