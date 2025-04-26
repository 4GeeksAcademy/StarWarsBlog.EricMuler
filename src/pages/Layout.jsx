import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Logo from '../assets/img/logo_StarWars.png'
import useGlobalReducer from '../hooks/useGlobalReducer.jsx'

const Layout = () => {
  const { store, dispatch } = useGlobalReducer()
  const favs = store.favourites ?? []

  const removeFavorite = uid => {
    dispatch({ type: 'removeFavourites', uid })
  }

  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img
              src={Logo}
              alt="Star Wars"
              style={{ height: '40px', objectFit: 'contain' }}
            />
          </NavLink>
          <div className="ms-auto dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="favoritesDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites <span className="badge bg-secondary">{favs.length}</span>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="favoritesDropdown"
              style={{ minWidth: '200px' }}
            >
              {favs.length === 0 ? (
                <li className="dropdown-item text-muted">No favorites yet</li>
              ) : (
                favs.map(fav => (
                  <li
                    key={fav.uid}
                    className="d-flex justify-content-between align-items-center px-3 py-1"
                  >
                    <NavLink
                      to={`/detailsCharacters/${fav.uid}`}
                      className="text-decoration-none text-dark flex-grow-1"
                    >
                      {fav.name}
                    </NavLink>
                    <button
                      className="btn btn-sm btn-outline-danger ms-2"
                      onClick={() => removeFavorite(fav.uid)}
                    >
                      ×
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </nav>
      <main className="py-4">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
