import styled from 'styled-components';
import COLORS from '../../utils/colors';
import FONTS from '../../utils/Fonts';

export const Wrapper = styled.div`
  position: relative;
  max-width: 1160px;

  @media (max-width: 1190px) {
    width: calc(100vw - 4.8rem);
  }
`;

export const CardListContainer = styled.div`
  overflow: hidden;

  @media (max-width: 1190px) {
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Btn = styled.button`
  position: absolute;
  z-index: 10;
  top: 48%;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.gray300};
  opacity: 0.8;

  @media (max-width: 1190px) {
    display: none;
  }
`;

export const LeftBtn = styled(Btn)`
  left: -20px;
`;

export const RightBtn = styled(Btn)`
  right: -20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 5rem;
`;

export const Title = styled.div`
  ${FONTS.font24_Bold}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6.4rem;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    display: flex;
    justify-content: center;
  }
`;
