import checkIcon from '../../../../assets/icons/check.svg';
import * as S from './CheckMarkStyled';

const CheckMark = () => {
  return (
    <S.Check>
      <img src={checkIcon} alt="checkIcon" />
    </S.Check>
  );
};

export default CheckMark;
