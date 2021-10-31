import React, { useEffect, useState } from 'react';
import api from "../api"
export const GlobalContext = React.createContext(null)


function GlobalProvider({ children }) {

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
      },[erro])   


    return (

        <GlobalContext.Provider value={{randomId, movies, setMovies, erro, setErro}}>

            {children}

        </GlobalContext.Provider>

    );
    }
export default GlobalProvider;