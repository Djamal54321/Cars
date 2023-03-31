import React from 'react';
import axios from 'axios';

import './App.css';

import Header from './pages/header&sidebar/Header';
import Configuration from './pages/configuration/Configuration';
import CarsMain from './pages/cars/CarsMain';

export const SearchContext = React.createContext();

function App() {
  const [items, setItems] = React.useState([]); //хранит данные машин
  const [searchValue, setSearchValue] = React.useState(''); //хранит значения поиска

  React.useEffect(() => {
    axios.get('https://6417d9f8cc5fd8ffb1780f3e.mockapi.io/cars/items').then((res) => {
      setItems(res.data);
    });
  }, []);

  return (
    <div className="App">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Configuration />
        <CarsMain items={items} />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
