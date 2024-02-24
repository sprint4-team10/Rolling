import { CreateBtn } from "./CreateBtn";

export function CreateButton({children, widthOption, updownMargin, sideMargin, fontColor , fontSize , bgColor , border}) {
    return(
        <CreateBtn type="button" widthOption={widthOption} sideMargin={sideMargin} updownMargin={updownMargin} fontColor={fontColor} fontSize={fontSize} bgColor={bgColor} border={border}>{children}</CreateBtn>
    );
}