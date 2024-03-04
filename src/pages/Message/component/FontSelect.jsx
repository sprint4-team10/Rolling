import { useState, useEffect } from 'react';
import TextFields from '../../../components/TextField/TextFields';
import styled from 'styled-components';
import COLORS from '../../../utils/colors';
import FONTS from '../../../utils/Fonts';

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
      <ErrorMessage isError={isError}>폰트를 선택해주세요.</ErrorMessage>
    </>
  );
};

const ErrorMessage = styled.p`
  ${FONTS.font12_Regular}
  color: ${COLORS.error};
  visibility: ${({ isError }) => (isError ? 'visible' : 'hidden')};
  margin-top: 0.4rem;
`;
