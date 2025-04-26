import React, { useEffect, useState } from "react";
import CardVehicles from "../components/CardVehicles";

const AllVehicles = () => {
  const [Vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVehicles() {
      try {
        const res = await fetch("https://www.swapi.tech/api/vehicles");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setVehicles(data.results);
      } catch (err) {
        console.error("Error loading Vehicles", err);
      } finally {
        setLoading(false);
      }
    }
    fetchVehicles();
  }, []);
  if (loading) {
    return <p className="text-center mt-5">Loading Vehicles…</p>;
  }
  if (!Vehicles.length) {
    return <p className="text-center mt-5">No Vehicles found.</p>;
  }
  return (
    <div className="container mt-4">
      <h2>Vehicles</h2>
      <div className="d-flex flex-wrap gap-3">
        {Vehicles.map((c) => (
          <CardVehicles key={c.uid} id={c.uid} name={c.name} />
        ))}
      </div>
    </div>
  );
};

export default AllVehicles;
