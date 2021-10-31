import React, { useEffect, useState } from 'react';
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
background-image: "https://image.tmdb.org/t/p/w185/";
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
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items:center;
    margin-top: 80px;

    button:hover{
     filter: brightness(0.9)
        }

    img{
        width: 200px;
        margin-top: -90px;
    }
`

export const HeaderModal = styled.header`
background-color: #ff5656;
width: 100%;
height: 120px;
position: absolute;
top: 0;
right: 0;
z-index:0;
border-radius: 1rem 0rem 0rem 0rem;
`
export const Capa = styled.div`
z-index: 1;
    img{
        width: 160px;
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }
    img:hover{
        opacity: 96%;
    }
`
export const InfoModal = styled.div`
display: flex;
width: 100%;
justify-content: center;
flex-direction:column;
`
export const InfoModalContent = styled.div`
display: flex;
width: 100%;
justify-content: center;
flex-direction:column;
align-items: center;
h1{

}

`


