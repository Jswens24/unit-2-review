import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [chars, setChars] = useState([]);

  const fetchChars = () => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        setChars(res.data)
      })
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
