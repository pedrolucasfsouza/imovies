import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --text-title: #9FA2B4;
    --background: linear-gradient(60deg, rgba(2,0,36,1) 0%, rgba(255,28,28,1) 0%, rgba(255,86,86,1) 0%);
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

    h1{
        font-size: 1.5rem;
    }

    h3{
        font-weight: 600;
        font-size: 1rem;
    }
    p{
        font-size: 0.95rem;
    }

    `
