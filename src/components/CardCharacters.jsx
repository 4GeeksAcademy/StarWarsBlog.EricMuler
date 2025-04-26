import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useGlobalReducer from '../hooks/useGlobalReducer.jsx'
import noimage from '../assets/img/noimage.png'

const CardCharacter = ({ uid, name, imageUrl }) => {
  const navigate = useNavigate()
  const { store, dispatch } = useGlobalReducer()
  const favs = store.favourites ?? []
  const isFav = favs.some(f => f.uid === uid && f.category === 'character')

  const toggleFavourite = () => {
    if (isFav) {
      dispatch({ type: 'removeFavourites', uid, category: 'character' })
    } else {
      dispatch({
        type: 'addFavourites',
        favourite: { uid, name, imageUrl, category: 'character' }
      })
    }
  }

  const [details, setDetails] = useState(null)

  useEffect(() => {
    let mounted = true
    fetch(`https://www.swapi.tech/api/people/${uid}`)
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
        src={ imageUrl || `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg` }
        className="card-img-top"
        alt={name}
        onError={e => { e.currentTarget.src = noimage }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        {details && (
          <ul className="list-unstyled mb-3">
            <li><strong>Gender:</strong> {details.gender}</li>
            <li><strong>Hair Color:</strong> {details.hair_color}</li>
            <li><strong>Eye Color:</strong> {details.eye_color}</li>
          </ul>
        )}
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/detailsCharacters/${uid}`)}
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

export default CardCharacter
