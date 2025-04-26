import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useGlobalReducer from '../hooks/useGlobalReducer.jsx'
import noimage from '../assets/img/noimage.png'

const CardVehicles = ({ uid, name, imageUrl }) => {
  const navigate = useNavigate()
  const { store, dispatch } = useGlobalReducer()
  const favs = store.favourites ?? []
  const isFav = favs.some(f => f.uid === uid && f.category === 'vehicle')

  const toggleFavourite = () => {
    if (isFav) {
      dispatch({ type: 'removeFavourites', uid, category: 'vehicle' })
    } else {
      dispatch({
        type: 'addFavourites',
        favourite: { uid, name, imageUrl, category: 'vehicle' }
      })
    }
  }

  const [details, setDetails] = useState(null)

  useEffect(() => {
    let mounted = true
    fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
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
        src={imageUrl || `https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
        className="card-img-top"
        alt={name}
        onError={e => { e.currentTarget.src = noimage }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        {details && (
          <ul className="list-unstyled mb-3">
            <li><strong>Model:</strong> {details.model}</li>
            <li><strong>Manufacturer:</strong> {details.manufacturer}</li>
            <li><strong>Cost:</strong> {details.cost_in_credits}</li>
            <li><strong>Passengers:</strong> {details.passengers}</li>
          </ul>
        )}
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/detailsvehicles/${uid}`)}
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

export default CardVehicles
