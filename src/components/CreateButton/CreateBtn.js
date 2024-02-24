import styled from "styled-components";
import COLORS from "../../utils/colors";

const { purple600, white, gray300, gray900 } = COLORS;

const MARGIN_SIZES = {
    large : 1.4,
    medium : 0.8,
    small : 0.6,
    xSmall : 0.2
}

const FONT_COLOR = {
    basic : gray900,
    disable : white,
}

const BACKGROUND_COLOR = {
    basic : white,
    purple : purple600,
    disable : gray300,
    lightGray : gray300,
}

const BORDER = {
    basic : gray300,
    purple : purple600,
}

const FONT_SIZE = {
    large : 1.8,
    medium : 1.6,
    small : 1.4,
}

export const CreateBtn = styled.button `
    padding: ${({ marginSize }) => MARGIN_SIZES[marginSize] ?? MARGIN_SIZES['medium']}rem 1.6rem;
    color: ${({fontColor}) => FONT_COLOR[fontColor] ?? FONT_COLOR['basic']};
    text-align: center;
    font-family: Pretendard;
    font-size: ${({fontSize}) => FONT_SIZE[fontSize] ?? FONT_SIZE['medium']}1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.6rem;
    letter-spacing: -0.016rem;
    background-color : ${({bgColor}) => BACKGROUND_COLOR[bgColor] ?? BACKGROUND_COLOR['basic']};
    border : 0.1rem solid ${({border}) => BORDER[border] ?? BORDER['basic']};
    border-radius : 0.6rem;
`;