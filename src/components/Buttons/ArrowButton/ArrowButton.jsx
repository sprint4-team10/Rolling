import COLORS from '../../../utils/colors';
import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '../../../assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow_right.svg';

const ArrowButton = ({ onClick, direction }) => {
  return direction === 'left' ? (
    <ArrowButtonContainer type="button" onClick={onClick}>
      <ArrowLeft
        css={{
          width: `1.6rem`,
          height: `1.6rem`,
        }}
      />
    </ArrowButtonContainer>
  ) : (
    <ArrowButtonContainer type="button" onClick={onClick}>
      <ArrowRight
        css={{
          width: `1.6rem`,
          height: `1.6rem`,
        }}
      />
    </ArrowButtonContainer>
  );
};

const ArrowButtonContainer = styled.button`
  width: 4rem;
  height: 4rem;
  padding: 1.2rem;
  filter: drop-shadow(0px 0.4rem 0.8rem rgba(0, 0, 0, 0.08));
  backdrop-filter: blur(0.2rem);
  border-radius: 50%;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.gray300};
  opacity: 0.8;

  &:disabled {
    background-color: ${COLORS.gray100};
  }

  &:hover {
    background-color: ${COLORS.gray200};
  }

  &:active {
    background-color: ${COLORS.gray300};
  }

  &:focus {
    background-color: ${COLORS.gray400};
  }
`;

export default ArrowButton;
