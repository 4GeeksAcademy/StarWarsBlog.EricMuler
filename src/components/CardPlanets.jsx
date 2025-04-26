import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useGlobalReducer from '../hooks/useGlobalReducer.jsx'
import noimage from '../assets/img/noimage.png'

const CardPlanets = ({ uid, name, imageUrl }) => {
  const navigate = useNavigate()
  const { store, dispatch } = useGlobalReducer()
  const favs = store.favourites ?? []
  const isFav = favs.some(f => f.uid === uid && f.category === 'planet')

  const toggleFavourite = () => {
    if (isFav) {
      dispatch({ type: 'removeFavourites', uid, category: 'planet' })
    } else {
      dispatch({
        type: 'addFavourites',
        favourite: { uid, name, imageUrl, category: 'planet' }
      })
    }
  }

  const [details, setDetails] = useState(null)

  useEffect(() => {
    let mounted = true
    fetch(`https://www.swapi.tech/api/planets/${uid}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then(data => {
        if (mounted) setDetails(data.result.properties)
      })
      .catch(() => {})
    return () => { mounted = false }
  }, [uid])

  return (
    <div className="card" style={{ width: '25rem', minWidth: '25rem' }}>
      <img
        src={imageUrl || `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
        className="card-img-top"
        alt={name}
        onError={e => { e.currentTarget.src = noimage }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        {details && (
          <ul className="list-unstyled mb-3">
            <li><strong>Climate:</strong> {details.climate}</li>
            <li><strong>Diameter:</strong> {details.diameter}</li>
            <li><strong>Gravity:</strong> {details.gravity}</li>
            <li><strong>Population:</strong> {details.population}</li>
          </ul>
        )}
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/detailsplanets/${uid}`)}
          >
            Learn more!
          </button>
          <span
            style={{ cursor: 'pointer', fontSize: '1.5rem', lineHeight: 1 }}
            onClick={toggleFavourite}
          >
            {isFav ? '💖' : '🤍'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CardPlanets
