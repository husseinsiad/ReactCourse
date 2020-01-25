import React from 'react';
import logo from './logo.svg';
 import Game from './Game'
import Rando from './Rando'
import Button from './Button';
import BrokeButton from './BrokenButton'
import './App.css';

function App() {
  return (
    <div className="App">
     {/* <Game/> */}
    {/* <Rando maxNum={7}/> */}
    {/* <Button/> */}
    <BrokeButton/>
    </div>
  );
}

export default App;
