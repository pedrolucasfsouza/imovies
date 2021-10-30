import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
flex-direction: row;
margin-top: 50px;

`

export const Content = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 700px;
flex-direction: row;

button{
      padding: 1.5rem 3rem;
      height: 4rem;
      background-color: white;
      color:black;
      border: 0;
      border-radius: 1.8rem;
      transition: 0.9s;
      font-size: 1rem;
      font-weight: 600;
      cursor:pointer;
      }
`
export const RadioBox = styled.button`
    height: 4rem;
    border-radius: 0.25rem;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.9s;

span {
    display: inline-block;
    margin-left: 1rem;
    margin-top: 0.4rem;
    font-size: 1.1rem;}
:hover{
    opacity: 85%;
}

span.pular{
    margin: 0px;
}
`


