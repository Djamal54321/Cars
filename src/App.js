import React from 'react';
import axios from 'axios';

import './App.css';

import Header from './pages/header&sidebar/Header';
import Configuration from './pages/configuration/Configuration';
import CarsMain from './pages/CarsMain/CarsMain';

export const ObjContext = React.createContext();

function App() {
  const [items, setItems] = React.useState([]); //хранит данные машин
  const [searchValue, setSearchValue] = React.useState(''); //хранит значения поиска
  const [categoryCarID, setCategoryCarID] = React.useState(0);
  const [categoryID, setCategoryID] = React.useState(0);
  const [marka, setMarka] = React.useState(false);
  const [korobka, setKorobka] = React.useState(false);
  const [dvigatel, setDvigatel] = React.useState(false);
  const [volume, setVolume] = React.useState(false);
  const [hozyaeva, setHozyaeva] = React.useState(false);
  const [stateCar, setStateCar] = React.useState(false);
  const [priceFrom, setPriceFrom] = React.useState('');
  const [priceFor, setPriceFor] = React.useState('');

  React.useEffect(() => {
    const category = categoryCarID > 0 ? categoryCarID : ''; //не работает! ХЗ почему..

    axios
      .get(
        `https://6417d9f8cc5fd8ffb1780f3e.mockapi.io/cars/items?search=${searchValue}&category=${category}`,
      )
      .then((res) => {
        setItems(res.data);
      });
  }, [searchValue]);

  return (
    <div className="App">
      <ObjContext.Provider
        value={{
          searchValue,
          setSearchValue,
          categoryCarID,
          setCategoryCarID,
          categoryID,
          setCategoryID,
          marka,
          setMarka,
          korobka,
          setKorobka,
          dvigatel,
          setDvigatel,
          volume,
          setVolume,
          hozyaeva,
          setHozyaeva,
          stateCar,
          setStateCar,
          priceFrom,
          setPriceFrom,
          priceFor,
          setPriceFor,
        }}>
        <Header />
        <Configuration />
        <CarsMain items={items} />
      </ObjContext.Provider>
    </div>
  );
}

export default App;
