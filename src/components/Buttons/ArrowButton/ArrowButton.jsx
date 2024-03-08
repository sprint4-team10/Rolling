import { ReactComponent as ArrowLeft } from '../../../assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow_right.svg';
import * as S from './ArrowButtonStyled';

const ArrowButton = ({ onClick, direction }) => {
  return direction === 'left' ? (
    <S.ArrowButtonContainer type="button" onClick={onClick}>
      <ArrowLeft
        css={{
          width: `1.6rem`,
          height: `1.6rem`,
        }}
      />
    </S.ArrowButtonContainer>
  ) : (
    <S.ArrowButtonContainer type="button" onClick={onClick}>
      <ArrowRight
        css={{
          width: `1.6rem`,
          height: `1.6rem`,
        }}
      />
    </S.ArrowButtonContainer>
  );
};

export default ArrowButton;
