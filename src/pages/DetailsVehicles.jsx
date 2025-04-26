import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import noimage from '../assets/img/noimage.png'

export default function DetailsVehicles() {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/vehicles/${id}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then(json => setData(json.result))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p className="text-center mt-5">Loading vehicle…</p>
  if (!data)   return <p className="text-center mt-5">Vehicle not found.</p>

  const p = data.properties

  return (
    <>
      <div className="d-flex align-items-start gap-4">
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
          alt={p.name}
          style={{ width: '400px', height: 'auto' }}
          onError={e => { e.target.onerror = null; e.target.src = noimage }}
        />
        <div>
          <h1>{p.name}</h1>
          <p>{data.description}</p>
        </div>
      </div>
      <hr className="mt-4 mb-3 border-danger" />
      <div className="row text-center text-danger">
        <div className="col">
          <div>Name</div>
          <div>{p.name}</div>
        </div>
        <div className="col">
          <div>Model</div>
          <div>{p.model}</div>
        </div>
        <div className="col">
          <div>Class</div>
          <div>{p.vehicle_class}</div>
        </div>
        <div className="col">
          <div>Manufacturer</div>
          <div>{p.manufacturer}</div>
        </div>
        <div className="col">
          <div>Cost</div>
          <div>{p.cost_in_credits}</div>
        </div>
        <div className="col">
          <div>Length</div>
          <div>{p.length}</div>
        </div>
      </div>
    </>
  )
}