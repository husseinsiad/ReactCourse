import React from 'react';
import logo from './logo.svg';
import Random from './Random'
import './App.css';

function App() {
  return (
    <div className="App">
      <Random maxNum={10}/>
    </div>
  );
}

export default App;
