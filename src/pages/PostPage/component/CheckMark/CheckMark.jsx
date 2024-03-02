import styled from 'styled-components';
import checkIcon from '../../../../assets/icons/check.svg';
import COLORS from '../../../../utils/colors';

const CheckMark = () => {
  return (
    <Check>
      <img src={checkIcon} alt="checkIcon" />
    </Check>
  );
};

export const Check = styled.div`
  padding: 1rem;
  background-color: ${COLORS.gray500};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export default CheckMark;
