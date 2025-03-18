import React, { useEffect, useState } from "react";
import { CardPlanets } from "../components/CardPlanets"
export const AllPlanets = () => {
    useEffect(() => {
        GetPlanets()
     }, [])
    const [planets, setPlanets] = useState([])
    async function GetPlanets() {
        fetch("https://www.swapi.tech/api/planets/")
            .then(res => res.json())
            .then(data =>setPlanets(data.results))
            .catch(err => console.error(err))
    }

    return (
        <div>
            {
                planets ? 
                planets.map((planet,index)=>(
                <CardPlanets id={planet.uid} name={planet.name} />
                ))
                :
                <p>No ahi platens</p>
            }
           
        </div>
    )
}