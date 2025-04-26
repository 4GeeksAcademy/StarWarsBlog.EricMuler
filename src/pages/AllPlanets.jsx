import React, { useEffect, useState } from "react";
import CardPlanets from "../components/CardPlanets";

const AllPlanets = () => {
  const [Planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlanets() {
      try {
        const res = await fetch("https://www.swapi.tech/api/planets");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setPlanets(data.results);
      } catch (err) {
        console.error("Error loading Planets", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPlanets();
  }, []);
  if (loading) {
    return <p className="text-center mt-5">Loading Planets…</p>;
  }
  if (!Planets.length) {
    return <p className="text-center mt-5">No Planets found.</p>;
  }
  return (
    <div className="container mt-4">
      <h2>Planets</h2>
      <div className="d-flex flex-wrap gap-3">
        {Planets.map((c) => (
          <CardPlanets key={c.uid} id={c.uid} name={c.name} />
        ))}
      </div>
    </div>
  );
};

export default AllPlanets;
