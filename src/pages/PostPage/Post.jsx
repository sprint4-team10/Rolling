import styled from 'styled-components';
import COLORS from '../../utils/colors';
import FONTS from '../../utils/Fonts';
import Buttons from '../../components/Buttons';
import { useState } from 'react';
import BackgroundOption from './component/BackgroundOption/BackgroundOption.jsx';

const Post = () => {
  const [inputValue, setInputValue] = useState();
  const [isEmptyError, setIsEmptyError] = useState(false);
  const [backgroundType, setBackgroundType] = useState('color');

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
  return (
    <PostLayout>
      <SendToInputContainer>
        <MainDescription>To.</MainDescription>
        <InputBox
          type="text"
          placeholder="받는 사람 이름을 입력해 주세요"
          value={inputValue}
          onChange={handleInputValue}
          onBlur={handleOnBlur}
        />
        <ErrorMessage visibility={isEmptyError ? 'visible' : 'hidden'}>값을 입력해 주세요.</ErrorMessage>
      </SendToInputContainer>
      <div>
        <MainDescription>배경화면을 선택해 주세요.</MainDescription>
        <Subscription>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</Subscription>
      </div>
      <div>
        <SelectButton type="button" name="color" onClick={handleBackgroundType} value={backgroundType}>
          컬러
        </SelectButton>
        <SelectButton type="button" name="image" onClick={handleBackgroundType} value={backgroundType}>
          이미지
        </SelectButton>
      </div>
      <BackgroundOption backgroundType={backgroundType} />
      <Buttons buttonType="Primary56" buttonSize="large" isDisabled={isEmptyError}>
        생성하기
      </Buttons>
    </PostLayout>
  );
};

const Visibility = {
  visible: 'visible',
  hidden: 'hidden',
};

const PostLayout = styled.div`
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

const SelectButton = styled.button`
  display: inline-block;
  width: 12rem;
  padding: 0.7rem 1.6rem;
  color: ${COLORS.gray900};
  text-align: cetner;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
  border-radius: 0.8rem;
  background-color: ${COLORS.gray100};
  border: 0.2rem solid ${COLORS.gray100};

  &:hover,
  &:active {
    border: 0.2rem solid ${COLORS.purple700};
    color: ${COLORS.purple700};
    font-weight: 700;
  }
`;

const ErrorMessage = styled.p`
  ${FONTS.font12_Regular}
  color: ${COLORS.error};
  visibility: ${({ visibility }) => Visibility[visibility] ?? Visibility['hidden']};
`;

export default Post;
