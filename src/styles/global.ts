import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    /* body * {
        border:  1px solid red;
    } */

    body {
        background: ${props => props.theme["darck-100"]};
        color: ${props => props.theme.text};
        
        -webkit-font-smoothing: antialiased;
        /* max-width: 1920px;
    margin: auto; */
    }

    body, input, textarea, button, a, h1, h2, p {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    button:hover {
    filter: brightness(0.8); /* Reduz o brilho em 20% */
    }

`