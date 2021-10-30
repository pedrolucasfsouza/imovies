import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --text-title: #9FA2B4;
    --background: #FF0050;
    --bg-page: #F4F4F4;

    --menu: white;

    }
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    }
    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }
    body{
        background: var(--background);
        -webkit-font-smoothing:antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    `
