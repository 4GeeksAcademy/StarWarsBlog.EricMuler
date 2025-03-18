import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useGlobalReducer from "../hooks/useGlobalReducer";



const DetailsCharacters = () => {
    const { id } = useParams();
    const { store, dispatch } = useGlobalReducer()
    useEffect(() => {
        GetCharacter()
    }, [])
    const [Character, setCharacter] = useState([])
    async function GetCharacter() {
        fetch("https://www.swapi.tech/api/Characters/" + id)
            .then(res => res.json())
            .then(data => setCharacter(data.result.properties))
            //.then(data => console.log(data.result))
            .catch(err => console.error(err))
    }

    return (
        <div className="d-flex ">
            <img src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" style={{ width: "400px", height: "150px" }} />
            <div >
                {Character && (
                    <>
                        <h1>{Character.name}</h1>
                        <p>Climate: {Character.climate}</p>
                        <p>Terrain: {Character.terrain}</p>
                        <p>Population: {Character.population}</p>
                    </>
                )}
            </div>
        </div>
    );
};



export default DetailsCharacters;