import React, { useEffect, useState } from 'react'
import './CharCard.css'
import axios from 'axios';
import FilmCard from './FilmCard';

const CharCard = ({ char, addNewFavorite, removeFromFavorites }) => {
    const [films, setFilms] = useState([]);

    const addNewFilm = (filmObj) => {
        setFilms([...films, filmObj])
    }

    console.log(films);

    // const { char } = props;
    // console.log(char.name, filmInfo);
    return (
        <div className='char-card-container'>
            <p>{char.name}</p>
            <div>
                <h3>Movies in which this character appears:</h3>
                {char.films.map(filmUrl => {
                    return <FilmCard addNewFilm={addNewFilm} filmUrl={filmUrl} />
                })}
                {addNewFavorite ? (
                    <button onClick={() => addNewFavorite(char)}>Add to favorites</button>
                ) : (
                    < button onClick={() => removeFromFavorites(char.name)} > Remove</button>
                )}
            </div>
        </div >
    )
}

export default CharCard