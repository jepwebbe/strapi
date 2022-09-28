import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
body{
    background-color: ${({theme}) => theme.colors.BackGround};
    color: ${({theme}) => theme.colors.OnBackGround};

}`