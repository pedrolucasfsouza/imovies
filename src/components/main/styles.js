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
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
position: relative;
`

export const ContentInfo = styled.header`
display: flex;
width: 100%;
padding: 0.5rem;
align-items: flex-start;
flex-direction: column;
background-color: rgba(0, 0, 0, 0.8);
height: auto;
position: absolute;
bottom: 0;

h1, h3, p{
    padding: 0.25rem 0px;
}

button{
    background: none;
    border:none;
    cursor: pointer;
    color: white;
    text-decoration: underline;
    font-weight: 600;
    transition: 0.15s;
:hover{
    font-size: 1.1rem;
}}

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
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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


