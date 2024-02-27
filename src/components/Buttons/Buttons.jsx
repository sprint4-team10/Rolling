import { Outlined36, Outlined40, Outlined56, Primary40, Primary56, Secondary40 } from './ButtonsStyled';

const Buttons = ({ children, buttonType }) => {
  switch (buttonType) {
    case 'Primary56':
      return <Primary56>{children}</Primary56>;
    case 'Primary40':
      return <Primary40>{children}</Primary40>;
    case 'Secondary40':
      return <Secondary40>{children}</Secondary40>;
    case 'Outlined56':
      return <Outlined56>{children}</Outlined56>;
    case 'Outlined40':
      return <Outlined40>{children}</Outlined40>;
    case 'Outlined36':
      return <Outlined36>{children}</Outlined36>;
  }
};

export default Buttons;
