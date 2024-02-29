import { useState } from 'react';
import TextFields from '../../../components/TextField/TextFields';

export const PostInput = ({ onChange }) => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    onChange(value);
  };

  return (
    <>
      <TextFields
        textFieldType="Input"
        placeholder="이름을 입력해 주세요."
        width="72rem"
        onChange={handleChange}
        value={name}
      />
    </>
  );
};
