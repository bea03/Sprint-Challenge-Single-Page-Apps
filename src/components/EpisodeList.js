import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
    const [episodes, setEpisodes ]= useState([]);

    useEffect(() => {
        Axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(data => {
            setEpisodes(data.data.results)
        })
        .catch(err => {
            console.log('Error', err)
        })
    }, [])
    return (
        <section className="grid-view">
            {episodes.map(episodes => (
                <EpisodeCard
                key={episodes.id}
                name={episodes.name}
                airDate={episodes.air_date}
                episode={episodes.episode}
                />
            ))}
        </section>
    )
}
