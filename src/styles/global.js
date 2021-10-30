import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --blue: #578EE1;

    --text-title: #9FA2B4;
    --text-body: #9FA2B4;

    --background: #F0F2F5;
    --shape: #FFFFFF;
    
    --menu: #363740;
    --link: #A4A6B3;

    --bg-client: #FBFBFB;

    }
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
