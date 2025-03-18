import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useGlobalReducer from "../hooks/useGlobalReducer";



export const CardCharacters = ({ id, name }) => {
    const { store, dispatch } = useGlobalReducer()
    const isFavourite = store.favourites.includes(name);
    
    return (
        <div className="card" style={{ width: "20rem", height: "25rem" }}>
            <img src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" style={{ width: "auto", height: "150px" }} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={`/detailsCharacters/${id}`} className="btn btn-outline-primary">Desea saber mas?</Link>
                    <button
                        onClick={() => dispatch({
                            favourite: name,
                            type: "addFavourites"
                        })}
                        className={`no-border btn ${isFavourite ? "btn-primary" : "btn-warning"}`}
                    >
                        <i className={isFavourite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

