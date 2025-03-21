import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useGlobalReducer from "../hooks/useGlobalReducer";



const DetailsVehicles = () => {
    const { id } = useParams();
    const { store, dispatch } = useGlobalReducer()
    useEffect(() => {
        GetVehicle()
    }, [])
    const [Vehicle, setVehicle] = useState([])
    async function GetVehicle() {
        fetch("https://www.swapi.tech/api/Vehicles/" + id)
            .then(res => res.json())
            .then(data => setVehicle(data.result.properties))
            //.then(data => console.log(data.result))
            .catch(err => console.error(err))
    }

    return (
        <div className="d-flex ">
            <img src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" style={{ width: "400px", height: "150px" }} />
            <div >
                {Vehicle && (
                    <>
                        <h1>{Vehicle.name}</h1>
                        <p>Climate: {Vehicle.climate}</p>
                        <p>Terrain: {Vehicle.terrain}</p>
                        <p>Population: {Vehicle.population}</p>
                    </>
                )}
            </div>
        </div>
    );
};



export default DetailsVehicles;