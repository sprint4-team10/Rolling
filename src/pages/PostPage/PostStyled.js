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

export const ToggleButtons = styled.div`
  background-color: ${COLORS.gray100};
  border-radius: 0.8rem;
`;

export const SelectButton = styled.button`
  display: inline-block;
  max-width: 12rem;
  padding: 0.7rem 1.6rem;
  color: ${({ isBgType }) => (isBgType === true ? COLORS.purple700 : COLORS.gray900)};
  text-align: center;
  font-size: 1.6rem;
  font-weight: ${({ isBgType }) => (isBgType === true ? 700 : 400)};
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
  border-radius: 0.8rem;
  background-color: ${({ isBgType }) => (isBgType === true ? COLORS.white : COLORS.gray100)};
  border: 0.2rem solid ${({ isBgType }) => (isBgType === true ? COLORS.purple700 : COLORS.gray100)};

  &:focus {
    background-color: ${COLORS.white};
    border: 0.2rem solid ${COLORS.purple700};
    color: ${COLORS.purple700};
    font-weight: 700;
  }
`;

export const ErrorMessage = styled.p`
  ${FONTS.font12_Regular}
  color: ${COLORS.error};
  visibility: ${({ isEmptyError }) => (isEmptyError ? 'visible' : 'hidden')};
`;

export const ColorBoxContainer = styled.div`
  display: grid;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
  grid-template-columns: repeat(4, minmax(16.6rem, 28.8rem));

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(11rem, 16.8rem));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(16.6rem, 16.8rem));
  }
`;

export const ImageBoxContainer = styled(ColorBoxContainer)``;

export const BackgroundOptionBox = styled.button`
  width: 16.8rem;
  height: 16.8rem;
  border-radius: 1.6rem;
  cursor: pointer;
`;

export const BackgroundColor = styled(BackgroundOptionBox)`
  background-color: ${({ backgroundColor }) => COLORS[backgroundColor]};
  position: relative;
`;

export const BackgroundImage = styled(BackgroundOptionBox)`
  background-image: url(${(props) => props.backgroundImageURL});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;

export const SelectImageCover = styled(BackgroundColor)`
  background-color: white;
  opacity: 0.2;
`;
