import React, { useEffect, useState } from 'react';
import api from "../api"
export const GlobalContext = React.createContext(null)


function GlobalProvider({ children }) {
    const [liked, setLiked] = useState([])
    const [notliked, setNotLiked] = useState([])
    const [movies, setMovies] = useState([])
    const [erro, setErro] = useState([])

        //função criada para gerar um ID aleatório entre o range 0 - 850000 (quantidade aproximada no acervo de filmes).
        function randomId() { 
            const random = Math.floor(Math.random() * 1500);
            return random 
          }

    useEffect(() =>{
        api.get(+randomId()+'?api_key=8baeb5a44370913e7186e6d238a3d021')
        .then(res => {
          setMovies(res.data)
        })
        .catch (err =>{
            setErro(err)
        })
      },[erro, liked, notliked])

      const like_json = eval(localStorage.getItem('like')) // variável que armazena os filmes curtidos, porém em formato JSON
      // função que salva os filmes curtidos no state "liked"
      function handleLike(){
        const index = liked.findIndex((movie) => (movie.id === movies.id)) //caso o ID já existe, o filme não será adicionado novamente.
        if (index === -1){
            const like_local = localStorage.getItem('like') // variavel que armazena os filmes curtidos no localstorage
            if (like_local){
            setLiked([...like_json, movies])
            localStorage.setItem("like",JSON.stringify([...like_json, movies]))}
        else{
            setLiked(movies)
            localStorage.setItem("like",JSON.stringify([movies]))}
      }
    }

    
    const noliked_json = eval(localStorage.getItem('noliked')) // variável que armazena os filmes não curtidos, porém em formato JSON

    //função que salva os filmes NÃO CURTIDOS no state "noliked"
    function handleNotLike(){ 
        const index = notliked.findIndex((movie) => (movie.id === movies.id))
        if (index === -1){
        const nolike_local = localStorage.getItem('noliked')
        if (nolike_local){
            setNotLiked([...noliked_json, movies])
            localStorage.setItem("noliked",JSON.stringify([...noliked_json, movies]))
        }
        else{
            setNotLiked(movies)
            localStorage.setItem("noliked",JSON.stringify([movies]))
        }
      }
    }
    

    return (

        <GlobalContext.Provider value={{randomId, movies, setMovies, erro, setErro, handleLike, handleNotLike, like_json, noliked_json}}>

            {children}

        </GlobalContext.Provider>

    );
    }
export default GlobalProvider;