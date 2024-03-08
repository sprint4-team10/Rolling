import styled from 'styled-components';
import COLORS from '../../styles/colors';
import FONTS from '../../styles/fonts';

export const Wrapper = styled.div`
  position: relative;
  max-width: 116rem;

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
  border: 0.1rem solid ${COLORS.gray300};
  opacity: 0.8;

  @media (max-width: 1190px) {
    display: none;
  }
`;

export const LeftBtn = styled(Btn)`
  left: -2rem;
`;

export const RightBtn = styled(Btn)`
  right: -2rem;
`;

export const Container = styled.div`
  max-width: 116rem;
  margin: 0 auto;
  padding-bottom: 6rem;
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
  text-align: center;
  margin-top: 6.4rem;
`;
