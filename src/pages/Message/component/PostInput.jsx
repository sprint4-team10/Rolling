import { useState } from 'react';
import TextFields from '../../../components/TextField/TextFields';
import styled from 'styled-components';
import COLORS from '../../../utils/colors';
import FONTS from '../../../utils/Fonts';

export const PostInput = ({ onChange }) => {
  const [name, setName] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    onChange(value);
  };

  const handleBlur = () => {
    setIsError(!name);
  };

  return (
    <>
      <TextFields
        textFieldType="Input"
        placeholder="이름을 입력해 주세요."
        width="72rem"
        onChange={handleChange}
        onBlur={handleBlur}
        value={name}
        isError={isError}
      />
      <ErrorMessage isError={isError}>이름을 입력해주세요.</ErrorMessage>
    </>
  );
};

const ErrorMessage = styled.p`
  ${FONTS.font12_Regular}
  color: ${COLORS.error};
  visibility: ${({ isError }) => (isError ? 'visible' : 'hidden')};
  margin-top: 0.4rem;
`;
