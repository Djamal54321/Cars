import React from 'react';

import './App.css';

import Header from './pages/header&sidebar/Header';
import Configuration from './pages/configuration/Configuration';
import CarsMain from './pages/cars/CarsMain';

function App() {
  return (
    <div className="App">
      <Header />
      <Configuration />
      <CarsMain />
    </div>
  );
}

export default App;
