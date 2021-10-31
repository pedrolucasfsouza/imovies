import React, { useEffect, useState } from 'react';
import Modal from 'react-modal'
import close from '../../assets/images/close.svg'
import capa from '../../assets/images/capa.jpg'

import { Container, Content, ContentInfo, ContainerModal, HeaderModal, Capa, InfoModal, InfoModalContent } from './styles'
import api from "../../api"

Modal.setAppElement('#root')


export default function Main() {

    const [movies, setMovies] = useState([])
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    
    useEffect(() =>{
        const id = 550;
        api.get('/'+id+'?api_key=8baeb5a44370913e7186e6d238a3d021')
        .then(res => {
          setMovies(res.data)
        })
        .catch (err =>{
        })
      },[])
      console.log(movies)

      

      function handleOpenNewTransactionModal(){
          setIsNewTransactionModalOpen(true);
      }
  
      function handleCloseNewTransactionModal(){
          setIsNewTransactionModalOpen(false);
      }


return(
    <>
    <Container>
        <Content>
        <ContentInfo>
            <h1>WONDER WOMAN</h1>
            <h3>2017 - FANTASY/SCIENCE FICTION FILME - 2H 21M</h3>
            <p>Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an un</p>
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
        <Capa><img src={capa}></img></Capa>
        <InfoModal>
            <InfoModalContent>
                <h1>CLUBE DA LUTA</h1>
                <h3>2017 - FANTASY/SCIENCE FICTION FILME - 2H 21M</h3>
                <p>Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an un Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an un Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an un</p>
            </InfoModalContent>
        </InfoModal>
        
        </ContainerModal>
        </Modal>

    </>
)
}