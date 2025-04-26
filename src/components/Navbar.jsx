import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Navbar = () => {
	const {store,dispatch} = useGlobalReducer()
	useEffect(() => {
		console.log(store.favourites);
	}, [store.favourites])

	return (
		<nav className="navbar navbar-light bg-light px-5">
			<img
				src="https://images.seeklogo.com/logo-png/13/1/star-wars-logo-png_seeklogo-131743.png"
				className="img-fluid"
				style={{ width: "5%" }}
				alt="Star Wars Logo" />
			<div className="ml-auto">

				<div className="dropdown" style={{ position: "relative" }}>
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favourites {store.favourites.length}
					</button>
					<ul className="dropdown-menu" style={{ right: 0, left: "auto" }}>
						{store.favourites.map((favourite, index) => {
							return (
								<li key={index} className="d-flex justify-content-between align-items-center">{favourite}
									<button
										>
										<i className="fa-solid fa-trash"></i>
									</button>
								</li>
							)
						})}
					</ul>
				</div>

			</div>
		</nav>
	);
};

