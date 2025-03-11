import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useGlobalReducer from "../hooks/useGlobalReducer";




const Cardvehicles = ({ id, name }) => {
        const {store,dispatch} = useGlobalReducer()
        const isFavourite = store.favourites.includes(name);
    return (
        <div className="card" style={{ width: "20rem", height: "25rem" }}>
            <img src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" style={{ width: "auto", height: "150px" }} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/detailsvehicles/${id}`} className="btn btn-outline-primary">Desea saber mas?</Link>
                    <button
                    
                        className={`no-border btn ${isFavourite ? "btn-primary" : "btn-warning"}`}
                    >
                        <i className={isFavourite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cardvehicles;