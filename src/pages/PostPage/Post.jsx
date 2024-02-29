import styled from 'styled-components';
import COLORS from '../../utils/colors';
import FONTS from '../../utils/Fonts';
import Buttons from '../../components/Buttons';
import { useEffect, useState } from 'react';
import { COLOR_OPTION } from './component/BackgroundOption/constant.js';
import checkIcon from '../../assets/icons/check.svg';
import { getBackgroundImageURL } from '../../api/getBackgroundImageURL.js';
import { createRollingPaper } from '../../api/createRollingPaper.js';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const [backgroundImgData, setBackgroundImgData] = useState();
  const [SelectedColor, setSelectedColor] = useState(0);
  const [SelectedImage, setSelectedImage] = useState(0);
  const [inputValue, setInputValue] = useState();
  const [isEmptyError, setIsEmptyError] = useState(false);
  const [backgroundType, setBackgroundType] = useState('color');
  const navigate = useNavigate();

  const handleLoadBackgroundImgURL = async () => {
    const data = await getBackgroundImageURL();
    setBackgroundImgData(data.imageUrls);
  };

  const handleSelectedColor = (e) => {
    e.preventDefault();
    setSelectedColor(+e.target.id);
  };

  const handleSelectedImage = (e) => {
    e.preventDefault();
    setSelectedImage(+e.target.id);
  };
  ///

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnBlur = (e) => {
    const currentInput = e.target.value;
    setIsEmptyError(!currentInput ? true : false);
  };

  const handleBackgroundType = (e) => {
    setBackgroundType(e.target.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const BgColor = {
      orange200: 'beige',
      purple200: 'purple',
      blue200: 'blue',
      green200: 'green',
    };

    const body = {
      team: '10',
      name: inputValue,
      backgroundColor: BgColor[COLOR_OPTION[SelectedColor]],
      backgroundImageURL: backgroundType === 'image' ? backgroundImgData[SelectedImage] : null,
    };

    const { id } = await createRollingPaper(body);
    console.log(id);
    navigate(`/post/${id}`);
  };

  useEffect(() => {
    handleLoadBackgroundImgURL();
  }, []);

  return (
    <PostLayout onSubmit={handleSubmit}>
      <SendToInputContainer>
        <MainDescription>To.</MainDescription>
        <InputBox
          type="text"
          placeholder="받는 사람 이름을 입력해 주세요"
          value={inputValue}
          onChange={handleInputValue}
          onBlur={handleOnBlur}
        />
        <ErrorMessage isEmptyError={isEmptyError}>값을 입력해 주세요.</ErrorMessage>
      </SendToInputContainer>
      <div>
        <MainDescription>배경화면을 선택해 주세요.</MainDescription>
        <Subscription>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</Subscription>
      </div>
      <ToggleButtons>
        <SelectButton
          isBgType={backgroundType === 'color'}
          type="button"
          name="color"
          onClick={handleBackgroundType}
          value={backgroundType}
        >
          컬러
        </SelectButton>
        <SelectButton
          isBgType={backgroundType === 'image'}
          type="button"
          name="image"
          onClick={handleBackgroundType}
          value={backgroundType}
        >
          이미지
        </SelectButton>
      </ToggleButtons>
      {backgroundType === 'color' ? (
        <ColorBoxContainer>
          {COLOR_OPTION.map((color, index) => (
            <BackgroundColor backgroundColor={color} key={index} id={index} onClick={handleSelectedColor}>
              {index === SelectedColor && (
                <CheckMark>
                  <img src={checkIcon} alt="checkIcon" />
                </CheckMark>
              )}
            </BackgroundColor>
          ))}
        </ColorBoxContainer>
      ) : (
        <ImageBoxContainer>
          {backgroundImgData.map((url, index) => (
            <BackgroundImage backgroundImageURL={url} key={index} id={index} onClick={handleSelectedImage}>
              {index === SelectedImage && (
                <>
                  <CheckMark>
                    <img src={checkIcon} alt="checkIcon" />
                  </CheckMark>
                  <SelectImageCover />
                </>
              )}
            </BackgroundImage>
          ))}
        </ImageBoxContainer>
      )}
      <Buttons buttonType="Primary56" buttonSize="large" isDisabled={isEmptyError} onClick={handleSubmit}>
        생성하기
      </Buttons>
    </PostLayout>
  );
};

const PostLayout = styled.form`
  padding-top: 6rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

const InputBox = styled.input`
  width: 72rem;
  padding: 1.2rem 1.6rem;
  border: 0.1rem solid ${COLORS.gray300};
  border-radius: 0.8rem;
`;

const MainDescription = styled.h2`
  ${FONTS.font24_Bold}
  color: ${COLORS.gray900};
`;

const Subscription = styled.p`
  ${FONTS.font16_Regular}
  color: ${COLORS.gray500};
`;

const SendToInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.4rem;
`;

const ToggleButtons = styled.div`
  background-color: ${COLORS.gray100};
  border-radius: 0.8rem;
`;

const SelectButton = styled.button`
  display: inline-block;
  width: 12rem;
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

const ErrorMessage = styled.p`
  ${FONTS.font12_Regular}
  color: ${COLORS.error};
  visibility: ${({ isEmptyError }) => (isEmptyError ? 'visible' : 'hidden')};
`;

///

const CheckMark = styled.div`
  padding: 1rem;
  background-color: ${COLORS.gray500};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const ColorBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
`;

const ImageBoxContainer = styled(ColorBoxContainer)``;

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

export default Post;
