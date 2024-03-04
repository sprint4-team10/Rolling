import { useState, useEffect } from 'react';
import TextFields from '../../../components/TextField/TextFields';
import styled from 'styled-components';
import COLORS from '../../../utils/colors';
import FONTS from '../../../utils/Fonts';
const OPTIONS = [
  { value: '지인', name: '지인' },
  { value: '동료', name: '동료' },
  { value: '가족', name: '가족' },
  { value: '친구', name: '친구' },
];

export const RelationshipSelect = ({ messageData, setMessageData }) => {
  const [isError, setIsError] = useState(false);

  const handleChange = (selectedOption) => {
    setMessageData((prevData) => ({
      ...prevData,
      relationship: selectedOption,
    }));
  };

  useEffect(() => {
    setIsError(messageData.relationship === '');
  }, [messageData.relationship]);

  return (
    <>
      <TextFields
        textFieldType="Dropdown"
        defaultValue="상대와의 관계"
        options={OPTIONS}
        width="72rem"
        name="relationship"
        onChange={handleChange}
        isError={isError}
      />
      <ErrorMessage isError={isError}>상대와의 관계를 선택해주세요.</ErrorMessage>
    </>
  );
};

const ErrorMessage = styled.p`
  ${FONTS.font12_Regular}
  color: ${COLORS.error};
  visibility: ${({ isError }) => (isError ? 'visible' : 'hidden')};
  margin-top: 0.4rem;
`;
