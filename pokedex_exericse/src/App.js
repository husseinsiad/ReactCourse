import React from 'react';
import Pokecard from './Pokecard'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h2 className="bg bg-primary text-danger">Pokedex</h2>
     <Pokecard/>
    </div>
  );
}

export default App;
