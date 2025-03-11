import React, {  useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useGlobalReducer from "../hooks/useGlobalReducer";



const DetailsPlanets = () => {
    const { id } = useParams(); 
    const {store,dispatch} = useGlobalReducer()
    



    useEffect(() => {
    }, [id])

  

    return (
        <div className="d-flex ">
            <img src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" style={{ width: "400px", height: "150px" }} />
            <div >
                {store.one_planet && (
                    <>
                        <h1>{store.one_planet.name}</h1>
                        <p>Climate: {store.one_planet.climate}</p>
                        <p>Terrain: {store.one_planet.terrain}</p>
                        <p>Population: {store.one_planet.population}</p>
                    </>
                )}
            </div>
        </div>
    );
};



export default DetailsPlanets;