import React, { useEffect, useState } from "react";
import CardCharacters from "../components/CardCharacters";

const AllCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const res = await fetch("https://www.swapi.tech/api/people");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setCharacters(data.results);
      } catch (err) {
        console.error("Error loading characters", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCharacters();
  }, []);
  if (loading) {
    return <p className="text-center mt-5">Loading characters…</p>;
  }
  if (!characters.length) {
    return <p className="text-center mt-5">No characters found.</p>;
  }
  return (
    <div className="container mt-4">
      <h2>Characters</h2>
      <div className="d-flex flex-wrap gap-3">
        {characters.map((c) => (
          <CardCharacters key={c.uid} id={c.uid} name={c.name} />
        ))}
      </div>
    </div>
  );
};

export default AllCharacters;
