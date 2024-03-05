import { useState, useEffect } from 'react';
import TextFields from '../../../../components/TextField/TextFields';
import * as S from './RelationshipSelectStyled';

const OPTIONS = [
  { value: '지인', name: '지인' },
  { value: '동료', name: '동료' },
  { value: '가족', name: '가족' },
  { value: '친구', name: '친구' },
];

const RelationshipSelect = ({ messageData, setMessageData }) => {
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
      <S.ErrorMessage isError={isError}>상대와의 관계를 선택해주세요.</S.ErrorMessage>
    </>
  );
};

export default RelationshipSelect;
