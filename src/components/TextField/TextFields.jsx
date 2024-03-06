import Dropdown from './Dropdown';
import * as S from './Input/InputStyled';
import TextEditor from './TextEditor';

const TextFields = ({
  textFieldType,
  placeholder,
  width,
  disabled,
  isError,
  $isError,
  options,
  defaultValue,
  onChange,
  onBlur,
}) => {
  switch (textFieldType) {
    case 'Input':
      return (
        <S.Input
          onChange={onChange}
          placeholder={placeholder}
          width={width}
          disabled={disabled}
          $isError={$isError}
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
