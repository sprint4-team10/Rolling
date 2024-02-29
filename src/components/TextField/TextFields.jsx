import { Dropdown } from './Dropdown';
import { Input } from './Input';
import { TextEditor } from './TextEditor';

const TextFields = ({ textFieldType, placeholder, width, disabled, isError, options, defaultValue, onChange }) => {
  switch (textFieldType) {
    case 'Input':
      return <Input placeholder={placeholder} width={width} disabled={disabled} isError={isError} />;
    case 'Dropdown':
      return (
        <Dropdown width={width} disabled={disabled} options={options} defaultValue={defaultValue} onChange={onChange} />
      );
    case 'TextEditor':
      return <TextEditor onChange={onChange} />;
  }
};

export default TextFields;
