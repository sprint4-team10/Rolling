import { Outlined36, Outlined40, Outlined56, Primary40, Primary56, Secondary40 } from './ButtonsStyled';

const Buttons = ({ children, buttonType, buttonSize, isDisabled }) => {
  switch (buttonType) {
    case 'Primary56':
      return (
        <Primary56 buttonSize={buttonSize} isDisabled={isDisabled}>
          {children}
        </Primary56>
      );
    case 'Primary40':
      return (
        <Primary40 buttonSize={buttonSize} isDisabled={isDisabled}>
          {children}
        </Primary40>
      );
    case 'Secondary40':
      return (
        <Secondary40 buttonSize={buttonSize} isDisabled={isDisabled}>
          {children}
        </Secondary40>
      );
    case 'Outlined56':
      return (
        <Outlined56 buttonSize={buttonSize} isDisabled={isDisabled}>
          {children}
        </Outlined56>
      );
    case 'Outlined40':
      return (
        <Outlined40 buttonSize={buttonSize} isDisabled={isDisabled}>
          {children}
        </Outlined40>
      );
    case 'Outlined36':
      return (
        <Outlined36 buttonSize={buttonSize} isDisabled={isDisabled}>
          {children}
        </Outlined36>
      );
    default:
      return;
  }
};

export default Buttons;
