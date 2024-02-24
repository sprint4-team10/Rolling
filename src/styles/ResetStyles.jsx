import { createGlobalStyle } from 'styled-components';

const ResetStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding:0;
        font-family: "Pretendard-Regular";
        word-break: keep-all;
    }

    li{
        list-style-type:none;
    }

    a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }

    input {
        border: none;
        padding: none;
    }
    input:focus {
      outline: none;
    }

    button {
        border: none;
        padding: unset;
        background-color: unset;
        cursor: pointer;
    }

`;

export default ResetStyles;
