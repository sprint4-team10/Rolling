import COLORS from '../../../utils/colors';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';
import * as S from './AddButtonStyled';

const AddButton = ({ onClick }) => {
  return (
    <S.AddButtonContainer type="button" onClick={onClick}>
      <Plus
        css={{
          color: `${COLORS.white}`,
          width: `2.4rem`,
          height: `2.4rem`,
        }}
      />
    </S.AddButtonContainer>
  );
};

export default AddButton;
