import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./detail.modules.css"

export default function Detail(){
    const {detailid}= useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailid}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailid]);

     const handleClick = () => {
        navigate('/home')
     }

    return(<div className="detail"> 
        <button onClick={handleClick}>Go Home</button>
        {character ?(
            <div>
                <div>
        <h1>{character.name} </h1>
        <h5>{character.status}</h5>
        <h5>{character.species}</h5>
        <h5>{character.gender}</h5>
        <h5>{character.origin?.name}</h5>
            </div>
            <div><img src ={character.image} alt = {character.name}/></div>
            </div>

        ) : ("")} </div>)
}