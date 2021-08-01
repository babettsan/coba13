import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        /* User Interface */
        --main-color: ${props => props.theme.mainColor};
        --main-color-light: ${props => props.theme.mainColorLight};
        --main-dark: ${props => props.theme.mainDark};
        --main-dark-light: ${props => props.theme.mainDarkLight};
        --font-color: ${props => props.theme.fontColor};
        --font-color-hover: ${props => props.theme.fontColorHover};
        /* Messages */
        --answer-font: ${props => props.theme.answerFont};
        --answer: ${props => props.theme.answer};
        --message-font: ${props => props.theme.messageFont};
        --message: ${props => props.theme.message};
        /* Backgrounds */
        --background-image: ${props => props.theme.backgroundImage};
        /* Neumorphism */
        --neu-background-main: ${props => props.theme.neuBackgroundMain};
        --neu-background: ${props => props.theme.neuBackground};
        --neu-background-gradient: ${props => props.theme.neuBackgroundGradient};
        --neu-shadow-glow: ${props => props.theme.neuShadowGlow};
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

export const defaultTheme = {
    /* User Interface */
    mainColor: '#1976d2',
    mainColorLight: '#63a4ff',
    mainDark: '#212121',
    mainDarkLight: '#484848',
    fontColor: '#000000',
    fontColorHover: '#000000',
    /* Messages */
    answerFont: '#000000',
    answer: '#004ba0',
    messageFont: '#000000',
    message: '#63a4ff',
    /* Backgrounds */
    backgroundImage: `url('https://i.imgur.com/ezkBk2V.jpg')`,
    /* Neumorphism */
    neuBackgroundMain: '#27282c',
    neuBackground: `rgb(17,167,252)`,
    neuBackgroundGradient: `linear-gradient(320deg, rgba(17,167,252,1) 0%, rgba(1,95,165,1) 100%)`,
    neuShadowGlow: `0px 0px 35px 10px rgba(17,167,252,0.5)`
}

export const goodTheme = {
    /* User Interface */
    mainColor: '#1976d2',
    mainColorLight: '#63a4ff',
    mainDark: '#212121',
    mainDarkLight: '#484848',
    fontColor: '#000000',
    fontColorHover: '#000000',
    /* Messages */
    answerFont: '#000000',
    answer: '#004ba0',
    messageFont: '#000000',
    message: '#63a4ff',
    /* Backgrounds */
    backgroundImage: `url('https://www.10wallpaper.com/wallpaper/1366x768/1603/Earth_planet-Space_HD_Theme_Wallpaper_1366x768.jpg')`,
    /* Neumorphism */
    neuBackgroundMain: '#27282c',
    neuBackground: `rgb(17,167,252)`,
    neuBackgroundGradient: `linear-gradient(320deg, rgba(17,167,252,1) 0%, rgba(1,95,165,1) 100%)`,
    neuShadowGlow: `0px 0px 35px 10px rgba(17,167,252,0.5)`
}

export const openTheme = {
    /* User Interface */
    mainColor: '#ffff00',
    mainColorLight: '#ffff5a',
    mainDark: '#212121',
    mainDarkLight: '#484848',
    fontColor: '#000000',
    fontColorHover: '#000000',
    /* Messages */
    answerFont: '#000000',
    answer: '#c7cc00',
    messageFont: '#000000',
    message: '#ffff5a',
    /* Backgrounds */
    backgroundImage: `url('https://economictimes.indiatimes.com/thumb/msid-81416716,width-1200,height-900,resizemode-4,imgsize-132311/space-agencies.jpg?from=mdr')`,
    /* Neumorphism */
    neuBackgroundMain: '#27282c',
    neuBackground: `rgb(255,255,0)`,
    neuBackgroundGradient: `linear-gradient(340deg, rgba(255,255,69,1) 0%, rgba(255,255,0,1) 100%)`,
    neuShadowGlow: `0px 0px 35px 10px rgba(255,255,0,0.5)`
}

export const badTheme = {
    /* User Interface */
    mainColor: '#d50000',
    mainColorLight: '#ff5131',
    mainDark: '#212121',
    mainDarkLight: '#484848',
    fontColor: '#000000',
    fontColorHover: '#000000',
    /* Messages */
    answerFont: '#000000',
    answer: '#9b0000',
    messageFont: '#000000',
    message: '#ff5131',
    /* Backgrounds */
    backgroundImage: `url('https://insightplus.mja.com.au/wp-content/uploads/2019/09/lungs-in-space-danger-in-the-dust-260.jpg')`,
    /* Neumorphism */
    neuBackgroundMain: '#27282c',
    neuBackground: `rgb(213,0,0)`,
    neuBackgroundGradient: `linear-gradient(340deg, rgba(255,103,75,1) 0%, rgba(213,0,0,1) 100%)`,
    neuShadowGlow: `0px 0px 35px 10px rgba(213,0,0,0.5)`
}

export const alienTheme = {
    /* User Interface */
    mainColor: '#76ff03',
    mainColorLight: '#b0ff57',
    mainDark: '#212121',
    mainDarkLight: '#484848',
    fontColor: '#000000',
    fontColorHover: '#000000',
    /* Messages */
    answerFont: '#000000',
    answer: '#32cb00',
    messageFont: '#000000',
    message: '#b0ff57',
    /* Backgrounds */
    backgroundImage: `url('https://cdna.artstation.com/p/assets/images/images/021/913/098/large/darien-bartholomew-darien-bartholomew-nest-without-marine.jpg?1573425894')`,
    /* Neumorphism */
    neuBackgroundMain: '#27282c',
    neuBackground: `rgb(118,255,3)`,
    neuBackgroundGradient: `linear-gradient(320deg, rgba(118,255,3,1) 0%, rgba(35,144,0,1) 100%)`,
    neuShadowGlow: `0px 0px 35px 10px rgba(118,255,3,0.5)`
}

export default GlobalStyle;