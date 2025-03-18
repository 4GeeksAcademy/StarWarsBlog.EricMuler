import React, { useEffect, useState } from "react";
import { CardVehicles } from "../components/CardVehicles"
export const AllVehicles = () => {
    useEffect(() => {
        GetVehicles()
     }, [])
    const [Vehicles, setVehicles] = useState([])
    async function GetVehicles() {
        fetch("https://www.swapi.tech/api/Vehicles/")
            .then(res => res.json())
            .then(data =>setVehicles(data.results))
            .catch(err => console.error(err))
    }

    return (
        <div>
            {
                Vehicles ? 
                Vehicles.map((Vehicle,index)=>(
                <CardVehicles id={Vehicle.uid} name={Vehicle.name} />
                ))
                :
                <p>No ahi Vehicles</p>
            }
           
        </div>
    )
}