import { CreateBtn } from "./CreateBtn";

export function CreateButton({children, marginSize, fontColor , fontSize , bgColor , border}) {
    return(
        <CreateBtn type="button" marginSize={marginSize} fontColor={fontColor} fontSize={fontSize} bgColor={bgColor} border={border}>{children}</CreateBtn>
    );
}