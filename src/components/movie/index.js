import React, { useEffect, useState } from 'react';
import Modal from 'react-modal'
import close from '../../assets/images/close.svg'
import capa from '../../assets/images/capa.jpg'

import { Container, Content } from './styles'
import api from "../../api"

import {GlobalContext} from '../../context/GlobalContext'

Modal.setAppElement('#root')


export default function Movie(props) {
    const {liked} = React.useContext(GlobalContext)

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    
      function handleOpenNewTransactionModal(){
          setIsNewTransactionModalOpen(true);
      }
  
      function handleCloseNewTransactionModal(){
          setIsNewTransactionModalOpen(false);
      }


return(
    <>
    <Container>
            <Content style={{ backgroundImage: `url(${'https://image.tmdb.org/t/p/w300//fklIyCfjBmxSoy3xBQbbuNBEHs0.jpg'})`}}>
            <h1>{props.title}</h1>
            <p>{props.sinopse}</p>
            </Content>
    </Container>


    </>
)
}