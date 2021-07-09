import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        /* User Interface */
        --font-color: #000000;
        --font-color-hover: #000000;
        --main-color: #ff6f00;
        --main-color-light: #ffa040;
        --main-dark: #212121;
        --main-dark-light: #484848;
        /* Messages */
        --answer-font: #000000;
        --answer: #c43e00;
        --message-font: #000000;
        --message: #ffa040;
        /* Backgrounds */
        --background-image: 'https://i.imgur.com/ezkBk2V.jpg'
    }
    html {
        font-size: 10px !important;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        font-size: 10px !important;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
    }
    ol, ul {
        list-style: none;
    }
`;

export default GlobalStyle;