import { useState } from 'react';
import * as S from './TextEditorStyled';

const TextEditor = ({ onChange }) => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
      ],
    },
  };

  const handleChange = (content) => {
    setValue(content);
    onChange(content);
  };

  return <S.Quill modules={modules} value={value} onChange={handleChange} />;
};

export default TextEditor;
