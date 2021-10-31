
import React, { useEffect, useState } from 'react';
import Header  from '../../components/header/index'
import Movie  from '../../components/movie/index'
import {GlobalContext} from '../../context/GlobalContext'

export default function Liked() {
    const {liked} = React.useContext(GlobalContext)
return(
    <>
    <Header></Header>
    {liked && liked.map((movie) => 
      <Movie
      title={movie.original_title}
      sinopse={movie.overview}
      ></Movie>)}

    </>
)
}