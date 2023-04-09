import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import '../styles/AllCharacters.css'

function AllCharacters() {
    
    const [  characters, setCharacters ] = useState([])

    useEffect (() =>{
        fetch("https://rickandmortyapi.com/api/character") //del endpoint
        .then((res)=>res.json()) //coge la información y la transforma a json
        .then((data)=>setCharacters(data.results)) //de la info, extrae results (tal cual viene en la API)
    }, []) //sólo cuando el "estado" del componente esté vacío
    
    
    
    
    return (
        <>
        {characters.map((character)=>{
            return(
                <div key={character.id}>
                    <Link to={`/character/${character.id}`}> <img src={character.image} alt={character.name} className='pic'/> </Link>
                    <p>{character.name}</p>
                </div>
            )
        })}
        </>
    )
}

export default AllCharacters