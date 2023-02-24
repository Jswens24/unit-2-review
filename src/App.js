import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Mapper from './Mapper';
import Favorites from './Favorites';

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
    const index = chars.findIndex(char => charObj.name === char.name)
    charObj.index = index
    setFavorites([...favorites, charObj])

    chars.splice(index, 1)
    setChars([...chars])
  }


  const removeFromFavorites = (name) => {
    const index = favorites.findIndex(fav => fav.name === name);
    chars.splice(favorites[index].index, 0, favorites[index])

    favorites.splice(index, 1)

    setFavorites([...favorites])
    setChars([...chars])
  }

  // useEffect(fetchChars, [])

  console.log((favorites));

  return (
    <div className="App">
      <Mapper addNewFavorite={addNewFavorite} chars={chars} />
      <Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />
    </div>
  );
}

export default App;
