import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FilmCard = ({ filmUrl, addNewFilm }) => {
    const [filmInfo, setFilmInfo] = useState([]);

    const fetchFilmInfo = () => {
        axios.get(filmUrl)
            .then(res => {
                setFilmInfo(res.data)
                addNewFilm(res.data)
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        fetchFilmInfo()
    }, [])


    return (
        <div>
            <p>{filmInfo.title}</p>
        </div>
    )
}

export default FilmCard