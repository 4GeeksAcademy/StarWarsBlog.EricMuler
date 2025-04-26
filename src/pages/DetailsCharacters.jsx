import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import noimage from '../assets/img/noimage.png'

export default function DetailsCharacters() {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${id}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then(json => setData(json.result))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p className="text-center mt-5">Loading character…</p>
  if (!data)   return <p className="text-center mt-5">Character not found.</p>

  const p = data.properties

  return (
    <>
      <div className="d-flex align-items-start gap-4">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
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
          <div>Birth Year</div>
          <div>{p.birth_year}</div>
        </div>
        <div className="col">
          <div>Gender</div>
          <div>{p.gender}</div>
        </div>
        <div className="col">
          <div>Height</div>
          <div>{p.height}</div>
        </div>
        <div className="col">
          <div>Skin Color</div>
          <div>{p.skin_color}</div>
        </div>
        <div className="col">
          <div>Eye Color</div>
          <div>{p.eye_color}</div>
        </div>
      </div>
    </>
  )
}