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
        color: white;
    }

    h3{
        font-weight: 600;
        font-size: 1rem;
        color: white;
    }
    p{
        font-size: 0.95rem;
        color: white;
    }

.react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 750px;
        height: 500px;
        background: #F4F4F4;
        padding: 3rem;
        position: relative;
        border-radius: 1rem 1rem 1rem 1rem;
        
        h1 {
            margin: 1rem 0rem 1rem 0rem;
            color: black;
        }

        h3{
            margin: 0.5rem 0rem 0.5rem 0rem;
            color: black;
        }
        p{
            color: black;
        }
        
    }

    .react-modal-close{
        position: absolute;
        right: -0.5rem;
        top: -1.2rem;
        padding: 1rem 1rem 0.8rem 1rem;
        border: 0;
        background: #F4F4F4;
        border-radius: 4rem;
        transition: filter 0.3s;
        z-index: 100;

     &:hover{
         filter: brightness(0.8)
     }   

    #overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  color: rgba(130, 130, 130, 0.5);
  font-size: 50px;
  text-align: center;
  line-height: 100px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
     }
    }`

