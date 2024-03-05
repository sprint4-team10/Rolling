import { useState } from 'react';
import TextFields from '../../../../components/TextField/TextFields';
import * as S from './PostInputStyled';

const PostInput = ({ onChange }) => {
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
      <S.ErrorMessage isError={isError}>이름을 입력해주세요.</S.ErrorMessage>
    </>
  );
};

export default PostInput;
