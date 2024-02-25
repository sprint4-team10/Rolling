import styled from 'styled-components';
import COLORS from '../../utils/colors';

const { purple600, white, gray300, gray900 } = COLORS;

const UPDOWN_MARGIN = {
  large: 1.4,
  medium: 0.8,
  small: 0.6,
  xSmall: 0.2,
};

const SIDE_MARGIN = {
  large: 2.4,
  medium: 1.6,
};

const FONT_SIZE = {
  large: 1.8,
  medium: 1.6,
  small: 1.4,
};

const FONT_COLOR = {
  gray900: gray900,
  white: white,
};

const BACKGROUND_COLOR = {
  white: white,
  purple: purple600,
  disable: gray300,
  lightGray: gray300,
};

const BORDER = {
  gray300: gray300,
  purple: purple600,
};

const WIDTH_OPTION = {
  auto: 'auto',
  full: '100%',
};

export const CreateBtn = styled.button`
  width: ${({ widthOption }) => WIDTH_OPTION[widthOption] ?? WIDTH_OPTION['auto']};
  padding: ${({ updownMargin }) => UPDOWN_MARGIN[updownMargin] ?? UPDOWN_MARGIN['medium']}rem
    ${({ sideMargin }) => SIDE_MARGIN[sideMargin] ?? SIDE_MARGIN['medium']}rem;
  color: ${({ fontColor }) => FONT_COLOR[fontColor] ?? FONT_COLOR['gray900']};
  text-align: center;
  font-family: Pretendard;
  font-size: ${({ fontSize }) => FONT_SIZE[fontSize] ?? FONT_SIZE['medium']}rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
  background-color: ${({ bgColor }) => BACKGROUND_COLOR[bgColor] ?? BACKGROUND_COLOR['white']};
  border: 0.1rem solid ${({ border }) => BORDER[border] ?? BORDER['']};
  border-radius: 0.6rem;
`;
