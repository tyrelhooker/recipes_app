import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'

function App({recipes}) {
  return (
    <div className="App">
      <Menu recipes={recipes} title='Delicious Recipes' />
    </div>
  );
}

export default App;
