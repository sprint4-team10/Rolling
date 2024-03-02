import Buttons from '../../components/Buttons';
import { useEffect, useState } from 'react';
import { COLOR_OPTION } from './component/BackgroundOption/constant.js';
import { getBackgroundImageURL } from '../../api/getBackgroundImageURL.js';
import { createRollingPaper } from '../../api/createRollingPaper.js';
import { useNavigate } from 'react-router-dom';
import {
  BackgroundColor,
  BackgroundImage,
  ColorBoxContainer,
  ErrorMessage,
  ImageBoxContainer,
  InputBox,
  MainDescription,
  PostLayout,
  SelectButton,
  SelectImageCover,
  SendToInputContainer,
  Subscription,
  ToggleButtons,
} from './PostStyled.js';
import CheckMark from './component/CheckMark/CheckMark.jsx';

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
              {index === SelectedColor && <CheckMark />}
            </BackgroundColor>
          ))}
        </ColorBoxContainer>
      ) : (
        <ImageBoxContainer>
          {backgroundImgData.map((url, index) => (
            <BackgroundImage backgroundImageURL={url} key={index} id={index} onClick={handleSelectedImage}>
              {index === SelectedImage && (
                <>
                  <CheckMark />
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

export default Post;
