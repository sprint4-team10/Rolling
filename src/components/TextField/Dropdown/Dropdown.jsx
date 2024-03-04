import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import FONTS from '../../../utils/Fonts';
import COLORS from '../../../utils/colors';

export const Dropdown = ({ options, defaultValue, onChange }) => {
  const [currentValue, setCurrentValue] = useState(defaultValue);
  const [showOptions, setShowOptions] = useState(false);
  const selectRef = useRef(null);

  const handleOnChangeSelectValue = (e) => {
    const { innerText } = e.target;
    console.log('innerText:', innerText);
    setCurrentValue(innerText);
    onChange(innerText);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <SelectBox
      ref={selectRef}
      tabIndex="0"
      onClick={() => {
        setShowOptions((prev) => !prev);
      }}
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
    top: 0rem;
    right: 1.6rem;
    color: ${COLORS.gray900};
    font-size: 3rem;
  }

  &:focus {
    border: 0.1rem solid ${COLORS.gray500};
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
