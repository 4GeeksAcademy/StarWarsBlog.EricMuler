import React, { useState, useEffect } from 'react'
import { useParams }         from 'react-router-dom'
import useGlobalReducer      from '../hooks/useGlobalReducer'
import noimage               from '../assets/img/noimage.png'

const DetailsPlanets = () => {
  const { id } = useParams()
  const { store, dispatch } = useGlobalReducer()
  const [planet,      setPlanet]      = useState(null)
  const [description, setDescription] = useState('')
  const [loading,     setLoading]     = useState(true)

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${id}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then(data => {
        setPlanet(data.result.properties)
        setDescription(data.result.description || '')
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p className="text-center mt-5">planet loading....</p>
  if (!planet) return <p className="text-center mt-5">Planet not found...</p>

  return (
    <div className="container my-5">
      <div className="row align-items-start">
        <div className="col-md-6">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt={planet.name}
            className="img-fluid rounded shadow"
            onError={e => { e.currentTarget.src = noimage }}
          />
        </div>
        <div className="col-md-6">
          <h1>{planet.name}</h1>
          <p className="text-secondary">{description}</p>
        </div>
      </div>

      <hr className="border-danger my-4" />

      <div className="row text-center text-danger">
        <div className="col">
          <h6>name</h6>
          <p>{planet.name}</p>
        </div>
        <div className="col">
          <h6>climate</h6>
          <p>{planet.climate}</p>
        </div>
        <div className="col">
          <h6>population</h6>
          <p>{planet.population}</p>
        </div>
        <div className="col">
          <h6>orbital periodl</h6>
          <p>{planet.orbital_period}</p>
        </div>
        <div className="col">
          <h6>rotation period</h6>
          <p>{planet.rotation_period}</p>
        </div>
        <div className="col">
          <h6>diameter</h6>
          <p>{planet.diameter}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailsPlanets
