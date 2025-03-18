import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useGlobalReducer from "../hooks/useGlobalReducer";



const DetailsPlanets = () => {
    const { id } = useParams();
    const { store, dispatch } = useGlobalReducer()
    useEffect(() => {
        GetPlanet()
    }, [])
    const [planet, setPlanet] = useState([])
    async function GetPlanet() {
        fetch("https://www.swapi.tech/api/planets/" + id)
            .then(res => res.json())
            //.then(data => setPlanet(data.result.properties))
            .then(data => console.log(data.result.properties))
            .catch(err => console.error(err))
    }

    return (
        <div className="d-flex ">
            <img src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" style={{ width: "400px", height: "150px" }} />
            <div >
                {planet && (
                    <>
                        <h1>{planet.name}</h1>
                        <p>Climate: {planet.climate}</p>
                        <p>Terrain: {planet.terrain}</p>
                        <p>Population: {planet.population}</p>
                    </>
                )}
            </div>
        </div>
    );
};



export default DetailsPlanets;