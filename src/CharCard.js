import React, { useEffect, useState } from 'react'
import './CharCard.css'
import axios from 'axios';

const CharCard = ({ char }) => {
    const [filmInfo, setFilmInfo] = useState([]);

    const fetchFilmInfo = () => {
        let filmInfoResults = []
        char.films.forEach(async fimUrl => {
            console.log(char.name, fimUrl);
            let filmRes = await axios.get(fimUrl)
            filmInfoResults.push(filmRes)
            setFilmInfo()
            console.log(filmInfo);
        })
    };

    useEffect(() => {
        fetchFilmInfo()
    }, [])

    // const { char } = props;
    console.log(char.name, filmInfo);
    return (
        <div className='char-card-container'>
            <p>{char.name}</p>
        </div>
    )
}

export default CharCard