import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard.js";


export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(data => {
        setLocations(data.data.results);
      })
      .catch(err => {
        console.log("Error", err);
})
  }, []);
  return (
    <>
      <section className="grid-view">
        {locations.map(locations => {
          return <LocationCard key={locations.id}
          name={locations.name}
          type={locations.type}
          dimension={locations.dimension}
          residents={locations.residents} />
        })}
      </section>
    </>
);
}
