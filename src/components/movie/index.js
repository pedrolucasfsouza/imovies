import React, { useEffect, useState } from 'react';
import Modal from 'react-modal'
import close from '../../assets/images/close.svg'
import capa from '../../assets/images/capa.jpg'

import { Container, Content, ContentInfo } from './styles'
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

            <Content style={{ backgroundImage: `url(${'https://image.tmdb.org/t/p/w300/'+props.capa})`}}>
                <ContentInfo>
            <h1>{props.title && props.title.toUpperCase()}</h1>
            <p>{props.sinopse && props.sinopse.substr(0,50)}</p>
               </ContentInfo>            
            </Content>



    </>
)
}