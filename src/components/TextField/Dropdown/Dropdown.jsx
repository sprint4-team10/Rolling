import { useState, useRef } from 'react';
import { useHandleOutsideClick } from '../../../hooks/useHandleOutsideClick';
import * as S from './DropdownStyled';

const Dropdown = ({ options, defaultValue, onChange }) => {
  const [currentValue, setCurrentValue] = useState(defaultValue);
  const [showOptions, setShowOptions] = useState(false);
  const [bottomSpace, setBottomSpace] = useState(false);

  const selectRef = useRef(null);

  const handleOnChangeSelectValue = (e) => {
    const { innerText } = e.target;
    console.log('innerText:', innerText);
    setCurrentValue(innerText);
    onChange(innerText);
  };

  useHandleOutsideClick(selectRef, () => {
    setShowOptions(false);
  });

  const handleToggleOptions = () => {
    const bottomSpace = window.innerHeight - selectRef.current.getBoundingClientRect().bottom > 200;

    setShowOptions((prev) => !prev);
    setBottomSpace(bottomSpace);
  };

  return (
    <S.SelectBox ref={selectRef} tabIndex="0" onClick={handleToggleOptions} $isOpen={showOptions}>
      <S.Label>{currentValue}</S.Label>

      <S.SelectOptions $show={showOptions ? 'true' : undefined} $bottomSpace={bottomSpace} $isOpen={showOptions}>
        {options.map((option) => (
          <S.Option key={option.value} value={option.value} onClick={handleOnChangeSelectValue}>
            {option.name}
          </S.Option>
        ))}
      </S.SelectOptions>
    </S.SelectBox>
  );
};

export default Dropdown;
