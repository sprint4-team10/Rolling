import { Dropdown } from './Dropdown';
import { Input } from './Input';
import { TextEditor } from './TextEditor';

const TextFields = ({
  textFieldType,
  placeholder,
  width,
  disabled,
  isError,
  options,
  defaultValue,
  onChange,
  onBlur,
}) => {
  switch (textFieldType) {
    case 'Input':
      return (
        <Input
          onChange={onChange}
          placeholder={placeholder}
          width={width}
          disabled={disabled}
          isError={isError}
          onBlur={onBlur}
        />
      );
    case 'Dropdown':
      return (
        <Dropdown
          onChange={onChange}
          options={options}
          width={width}
          disabled={disabled}
          defaultValue={defaultValue}
          isError={isError}
        />
      );
    case 'TextEditor':
      return <TextEditor onChange={onChange} />;
  }
};

export default TextFields;
