import React, { useEffect, useState } from 'react';
import styled from "styled-components";

export const Container = styled.header`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
flex-direction: row;
margin-top: 50px;
background: #f5f5f5;
min-height: 650px;
`

export const Content = styled.header`
display: flex;
background-color: white;
width: 294px;
height: 350px;
border-radius: 0.3rem;
box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
padding: 1rem;
justify-content: flex-end;
align-items: flex-start;
flex-direction:column;
background-image: "https://image.tmdb.org/t/p/w185/";
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

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


