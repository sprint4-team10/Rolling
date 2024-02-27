import styled, { keyframes } from 'styled-components';
import completedIcon from '../../assets/icons/completed.svg';
import cancleIcon from '../../assets/icons/sharp_X.svg';
import COLORS from '../../utils/colors';
import FONTS from '../../utils/Fonts';
import { useEffect, useState } from 'react';

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
      <Container up={up} setup={setUp}>
        <Contents>
          <img src={completedIcon} alt="checkIcon" />
          URL이 복사 되었습니다.
        </Contents>
        <button onClick={() => setShowToast(false)}>
          <img src={cancleIcon} alt="cancelIcon" />
        </button>
      </Container>
    </>
  );
};

const toastUp = keyframes`
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

const toastDown = keyframes`
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

const Container = styled.div`
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

const Contents = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  ${FONTS.font16_Regular}
`;

export default Toast;
