import { Dropdown } from './Dropdown';
import { Input } from './Input';
import { TextEditor } from './TextEditor';

const TextFields = ({ children, textFieldType, placeholder, width, disabled, isError, options, defaultValue }) => {
  switch (textFieldType) {
    case 'Input':
      return <Input placeholder={placeholder} width={width} disabled={disabled} isError={isError} />;
    case 'Dropdown':
      return <Dropdown width={width} disabled={disabled} options={options} defaultValue={defaultValue} />;
    case 'TextEditor':
      return <TextEditor />;
  }
};

export default TextFields;
