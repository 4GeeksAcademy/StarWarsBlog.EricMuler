import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import CardCharacter from "../components/CardCharacters.jsx";
import CardPlanets    from "../components/CardPlanets.jsx";
import CardVehicles   from "../components/CardVehicles.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [characters, setCharacters] = useState([]);
  const [planets,    setPlanets]    = useState([]);
  const [vehicles,   setVehicles]   = useState([]);
  const [loading,    setLoading]    = useState(true);

  useEffect(() => {
    async function fetchAll() {
      try {
        const [resC, resP, resV] = await Promise.all([
          fetch("https://www.swapi.tech/api/people"),
          fetch("https://www.swapi.tech/api/planets"),
          fetch("https://www.swapi.tech/api/vehicles"),
        ]);
        if (!resC.ok || !resP.ok || !resV.ok)
          throw new Error("Error fetching resources");

        const [{ results: ch }, { results: pl }, { results: ve }] =
          await Promise.all([resC.json(), resP.json(), resV.json()]);

        setCharacters(ch);
        setPlanets(pl);
        setVehicles(ve);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchAll();
  }, []);

  if (loading) return <p className="text-center my-5">Loading…</p>;

  const renderSection = (title, items, CardComponent) => (
    <div className="mb-5">
      <h2>{title}</h2>
      <div className="d-flex gap-3 overflow-auto py-2">
        {items.map(item => (
          <CardComponent
            key={item.uid}
            uid={item.uid}
            name={item.name}
            imageUrl={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mt-5">
      {renderSection("Characters", characters, CardCharacter)}
      {renderSection("Planets",    planets,    CardPlanets)}
      {renderSection("Vehicles",   vehicles,   CardVehicles)}
    </div>
  );
};
