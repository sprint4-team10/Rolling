import { useState, useRef } from 'react';
import styled from 'styled-components';
import FONTS from '../../../utils/Fonts';
import COLORS from '../../../utils/colors';
import { useHandleOutsideClick } from '../../../hooks/useHandleOutsideClick';

export const Dropdown = ({ options, defaultValue, onChange, isError }) => {
  const [currentValue, setCurrentValue] = useState(defaultValue);
  const [showOptions, setShowOptions] = useState(false);

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
    setShowOptions((prev) => !prev);
  };

  return (
    <SelectBox
      ref={selectRef}
      tabIndex="0"
      onClick={handleToggleOptions}
      isOpen={showOptions}
      isError={isError} // 에러 상태가 있거나 외부에서 isError prop이 전달되면 에러 스타일을 적용
    >
      <Label>{currentValue}</Label>

      <SelectOptions show={showOptions}>
        {options.map((option) => (
          <Option key={option.value} value={option.value} onClick={handleOnChangeSelectValue}>
            {option.name}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
};

const SelectBox = styled.div`
  position: relative;
  width: ${({ width }) => width || '32rem'};
  padding: 1.2rem 1.6rem;
  color: ${COLORS.gray500};
  background-color: ${COLORS.white};
  border-radius: 0.8rem;
  border: 0.1rem solid ${({ isError }) => (isError ? COLORS.error : COLORS.gray300)};
  transition: border 0.2s ease-in-out;
  cursor: pointer;

  &::before {
    content: '⌵';
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? '1.5rem' : '0.1rem')};
    right: 1.6rem;
    color: ${COLORS.gray900};
    font-size: 3rem;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'none')};
  }

  &:focus {
    border: 0.1rem solid ${({ isError }) => (isError ? COLORS.error : COLORS.gray500)};
  }
`;

const Label = styled.label`
  font-size: 1.6rem;
  color: ${COLORS.gray900};
  ${FONTS.font16_Regular}
`;

const SelectOptions = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: ${({ show }) => (show ? 'block' : 'none')};
  overflow: hidden;
  margin-top: 5.8rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${COLORS.gray300};
  background-color: ${COLORS.white};
  color: ${COLORS.gray900};
  z-index: 1;
`;

const Option = styled.li`
  padding: 1.2rem 1.6rem;
  ${FONTS.font16_Regular}
  font-size: 1.6rem;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: ${COLORS.gray100};
  }
`;
