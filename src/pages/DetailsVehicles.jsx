import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useGlobalReducer from "../hooks/useGlobalReducer";


const DetailsVehicles = () => {
    const { id } = useParams(); 
    const {store,dispatch} = useGlobalReducer()
    

    useEffect(() => {


    }, [id])


    return (
        <div className="d-flex ">
            <img src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" style={{ width: "400px", height: "150px" }} />
            <div >
                {store.one_vehicle && (
                    <>
                        <h1>{store.one_vehicle.name}</h1>
                        <p>Model: {store.one_vehicle.model}</p>
                        <p>Manufacturer: {store.one_vehicle.manufacturer}</p>
                        <p>Cost in Credits: {store.one_vehicle.cost_in_credits}</p>
                    </>
                )}
            </div>
        </div>
    );
};



export default DetailsVehicles;