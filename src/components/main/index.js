import React, { useEffect, useState } from 'react';
import Modal from 'react-modal'
import close from '../../assets/images/close.svg'
import capa from '../../assets/images/capa.jpg'

import { Container, Content, ContentInfo, ContainerModal, HeaderModal, Capa, InfoModal, InfoModalContent } from './styles'
import api from "../../api"

import {GlobalContext} from '../../context/GlobalContext'

Modal.setAppElement('#root')


export default function Main() {
    const {randomId,movies, setMovies, erro, setErro} = React.useContext(GlobalContext)

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
        <Content style={{ backgroundImage: `url(${'https://image.tmdb.org/t/p/w780/'+movies.backdrop_path})`}}>
            <ContentInfo>
                <h1>{movies.original_title}</h1>
                <h3>{movies.release_date} - {movies.runtime} minutos</h3>
                <p>{movies.overview}</p>
                <button type="button" onClick={handleOpenNewTransactionModal}>Detalhes do Filme</button>
            </ContentInfo>
        </Content>
    </Container>

    <Modal isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">
        <button
        type="button"
        onClick={handleCloseNewTransactionModal}
        className="react-modal-close"><img src={close}></img></button>
        
        <ContainerModal>
        <HeaderModal></HeaderModal>
        <Capa><img src={'https://image.tmdb.org/t/p/w185/'+movies.poster_path}></img></Capa>
        <InfoModal>
            <InfoModalContent>
                <h1>{movies.original_title}</h1>
                <h3>{movies.release_date} - {movies.runtime} minutos</h3>
                <p>{movies.overview}</p>
            </InfoModalContent>
        </InfoModal>
        
        </ContainerModal>
        </Modal>

    </>
)
}