import React, { useEffect, useState } from 'react';
import { Container, Content, RadioBox } from './styles'
import nolike from "../../assets/images/n-curti.png"
import like from "../../assets/images/curti.png"

import {GlobalContext} from '../../context/GlobalContext'

export default function Buttons() {
    const {handleLike, handleNotLike} = React.useContext(GlobalContext)
return(
    <Container>
        <Content>
            <RadioBox
             onClick={handleNotLike}
             type="button">
                <img src={nolike}></img>
                <span>NÃO CURTI!</span>
            </RadioBox>

            <RadioBox
             type="button">
                 
                <span className="pular">PULAR</span>
            </RadioBox>

            <RadioBox
             onClick={handleLike}
             type="button">
                <img src={like}></img>
                <span>CURTI!</span>
            </RadioBox>


        </Content>
    </Container>
)
}