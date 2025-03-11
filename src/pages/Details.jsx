import React, { useActionState, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Details = () => {
    const { id } = useParams();
        const {store,dispatch} = useGlobalReducer()

    useEffect(() => {
        // actions.getCharacter(id);
        
    }, [id])


    if (!store.one_character) {
        return <p>Loading...</p>;
    }

    return (
        <div className="d-flex">
            <img
                src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
                alt="Details"
                style={{ width: "400px", height: "150px" }}
            />
            <div>
                {store.one_character && (
                    <>
                        <h1>{store.one_character.name}</h1>
                        <p>Eye Color: {store.one_character.eye_color}</p>
                        <p>Hair Color: {store.one_character.hair_color}</p>
                        <p>Gender: {store.one_character.gender}</p>
                    </>
                )}

                
            </div>
        </div>
    );
};

export default Details;