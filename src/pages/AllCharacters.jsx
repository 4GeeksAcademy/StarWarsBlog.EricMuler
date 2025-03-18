import React, { useEffect, useState } from "react";
import { CardCharacters } from "../components/CardCharacters"
export const AllCharacters = () => {
    useEffect(() => {
        GetCharacters()
     }, [])
    const [Characters, setCharacters] = useState([])
    async function GetCharacters() {
        fetch("https://www.swapi.tech/api/Characters/")
            .then(res => res.json())
            .then(data =>setCharacters(data.results))
            .catch(err => console.error(err))
    }

    return (
        <div>
            {
                Characters ? 
                Characters.map((Character,index)=>(
                <CardCharacters id={Character.uid} name={Character.name} />
                ))
                :
                <p>No ahi platens</p>
            }
           
        </div>
    )
}