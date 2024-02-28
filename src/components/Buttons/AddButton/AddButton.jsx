import COLORS from '../../../utils/colors';
import styled from 'styled-components';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';

const AddButton = ({ onClick }) => {
  return (
    <AddButtonContainer type="button" onClick={onClick}>
      <Plus
        css={{
          color: `${COLORS.white}`,
          width: `2.4rem`,
          height: `2.4rem`,
        }}
      />
    </AddButtonContainer>
  );
};

const AddButtonContainer = styled.button`
  padding: 1.6rem;
  background-color: ${COLORS.gray500};
  border-radius: 10rem;

  &:disabled {
    background-color: ${COLORS.gray300};
  }

  &:hover {
    background-color: ${COLORS.gray600};
  }

  &:active {
    background-color: ${COLORS.gray700};
  }

  &:focus {
    background-color: ${COLORS.gray800};
  }
`;

export default AddButton;
