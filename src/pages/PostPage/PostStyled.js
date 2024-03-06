import styled from 'styled-components';
import COLORS from '../../utils/colors';
import FONTS from '../../utils/Fonts';

export const PostLayout = styled.form`
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;
  max-width: 72rem;
  width: calc(-9.6rem + 100vw);
  margin: 2rem auto;
`;

export const InputBox = styled.input`
  max-width: 72rem;
  width: 100%;
  padding: 1.2rem 1.6rem;
  border: 0.1rem solid ${COLORS.gray300};
  border-radius: 0.8rem;
`;

export const MainDescription = styled.h2`
  ${FONTS.font24_Bold}
  color: ${COLORS.gray900};
`;

export const Subscription = styled.p`
  ${FONTS.font16_Regular}
  color: ${COLORS.gray500};
`;

export const SendToInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.4rem;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  ${FONTS.font12_Regular}
  color: ${COLORS.error};
  visibility: ${({ isEmptyError }) => (isEmptyError ? 'visible' : 'hidden')};
`;

export const BoxContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(4, minmax(100px, auto));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(100px, auto));
  }
`;

export const BackgroundOptionBox = styled.button`
  aspect-ratio: 1;
  border-radius: 1.6rem;
  cursor: pointer;
  position: relative;
`;

export const BackgroundColor = styled(BackgroundOptionBox)`
  background-color: ${({ backgroundColor }) => COLORS[backgroundColor]};
`;

export const BackgroundImage = styled(BackgroundOptionBox)`
  background-image: url(${(props) => props.backgroundImageURL});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const SelectImageCover = styled(BackgroundColor)`
  background-color: white;
  opacity: 0.2;
`;
