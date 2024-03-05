import { useState, useEffect } from 'react';
import TextFields from '../../../../components/TextField/TextFields';
import * as S from './FontSelectStyled';

const OPTIONS = [
  { value: 'Pretendard', name: 'Pretendard' },
  { value: 'Noto Sans', name: 'Noto Sans' },
];

export const FontSelect = ({ messageData, setMessageData }) => {
  const [isError, setIsError] = useState(false);

  const handleChange = (selectedOption) => {
    setMessageData((prevData) => ({
      ...prevData,
      font: selectedOption,
    }));
  };

  useEffect(() => {
    setIsError(messageData.font === '');
  }, [messageData.font]);
  return (
    <>
      <TextFields
        textFieldType="Dropdown"
        defaultValue="폰트 선택"
        options={OPTIONS}
        width="72rem"
        onChange={handleChange}
        isError={isError}
      />
      <S.ErrorMessage isError={isError}>폰트를 선택해주세요.</S.ErrorMessage>
    </>
  );
};

export default FontSelect;
