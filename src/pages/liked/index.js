
import React, { useEffect, useState } from 'react';
import Header  from '../../components/header/index'
import Movie  from '../../components/movie/index'
import {GlobalContext} from '../../context/GlobalContext'

import { Container, Content } from './styles'

export default function Liked() {
    const {liked, like_json} = React.useContext(GlobalContext)
return(
    <>
    <Header></Header>
    <Container>
      <Content>
    {like_json && like_json.map((movie) => 
      <Movie
      capa={movie.poster_path}
      title={movie.original_title}
      sinopse={movie.overview}
      ></Movie>)}
      </Content>
      </Container>
    </>
)
}