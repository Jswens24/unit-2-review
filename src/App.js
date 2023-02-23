import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Mapper from './Mapper';

function App() {
  const [chars, setChars] = useState([]);
  const [favorites, setFavorites] = useState([])

  const fetchChars = () => {
    axios.get('https://swapi.dev/api/people')
      .then((res) => {
        setChars(res.data.results)
        console.log(chars);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchChars();
  }, [])

  const addNewFavorite = (charObj) => {
    setFavorites([...favorites, charObj])
  }

  // useEffect(fetchChars, [])

  console.log((favorites));

  return (
    <div className="App">
      <Mapper addNewFavorite={addNewFavorite} chars={chars} />
    </div>
  );
}

export default App;
