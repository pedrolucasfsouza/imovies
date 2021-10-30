import styled from "styled-components";

export const Container = styled.header`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
flex-direction: row;
height: 70px;
font-weight: 600;
margin-top: 50px;



ul{
    list-style: none;
    flex-direction: row;
    display: flex;
    width: 1000px;
    justify-content: space-between;
    
}

a{
    display: block;
    text-decoration: none;
    color: var(--menu);
    font-size: 1.1rem;
}
`

