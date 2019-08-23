import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard.js";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(data => {
        setCharacters(data.data.results);
      })
      .catch(err => {
        console.log('Error', err);
      })
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(characters => (
          <CharacterCard key={characters.id}
          name={characters.name}
          status={characters.status}
          species={characters.species}
          origin={characters.origin.name}
          location={characters.location.name}
          image={characters.image} />
        ))
      }
    </section>
  );
}
