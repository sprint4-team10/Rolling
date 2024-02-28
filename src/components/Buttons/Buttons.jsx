import { Outlined36, Outlined40, Outlined56, Primary40, Primary56, Secondary40 } from './ButtonsStyled';

const Buttons = ({ onClick, children, buttonType, buttonSize, isDisabled }) => {
  switch (buttonType) {
    case 'Primary56':
      return (
        <Primary56 onClick={onClick} buttonSize={buttonSize} disabled={isDisabled}>
          {children}
        </Primary56>
      );
    case 'Primary40':
      return (
        <Primary40 onClick={onClick} buttonSize={buttonSize} disabled={isDisabled}>
          {children}
        </Primary40>
      );
    case 'Secondary40':
      return (
        <Secondary40 onClick={onClick} buttonSize={buttonSize} disabled={isDisabled}>
          {children}
        </Secondary40>
      );
    case 'Outlined56':
      return (
        <Outlined56 onClick={onClick} buttonSize={buttonSize} disabled={isDisabled}>
          {children}
        </Outlined56>
      );
    case 'Outlined40':
      return (
        <Outlined40 onClick={onClick} buttonSize={buttonSize} isDisabled={isDisabled}>
          {children}
        </Outlined40>
      );
    case 'Outlined36':
      return (
        <Outlined36 onClick={onClick} buttonSize={buttonSize} isDisabled={isDisabled}>
          {children}
        </Outlined36>
      );
    default:
      return;
  }
};

export default Buttons;
