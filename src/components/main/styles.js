import styled from "styled-components";

export const Container = styled.header`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
flex-direction: column;
margin-top: 50px;
`

export const Content = styled.header`
display: flex;
background-color: white;
width: 700px;
height: 460px;
border-radius: 0.3rem;
box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
padding: 1rem;
justify-content: flex-end;
align-items: center;
flex-direction:column;
`

export const ContentInfo = styled.header`
display: flex;
width: 100%;
height: 120px;
padding: 0.5rem;
align-items: flex-start;
flex-direction: column;
h1, h3, p{
    padding: 0.25rem 0px;
}
`

export const ContainerModal = styled.div `



      button:hover{
          filter: brightness(0.9)
      }
`

export const HeaderModal = styled.header`
background-color: orange;
width: 100%;
height: 100px;
position: absolute;
top: 0;
right: 0;
z-index:0;
border-radius: 1rem 0rem 0rem 0rem;
`

