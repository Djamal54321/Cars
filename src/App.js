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
  const [categoryCarID, setCategoryCarID] = React.useState(0); //хранит класс техники
  const [categoryID, setCategoryID] = React.useState(0); //хранит б/у или новые
  const [marka, setMarka] = React.useState(false);
  const [korobka, setKorobka] = React.useState(false); //// НЕ УКАЗАЛ НА BACK-END
  const [dvigatel, setDvigatel] = React.useState(false); //// НЕ УКАЗАЛ НА BACK-END
  const [volume, setVolume] = React.useState(false); //// НЕ УКАЗАЛ НА BACK-END
  const [hozyaeva, setHozyaeva] = React.useState(false); // количество владельцев
  const [stateCar, setStateCar] = React.useState(0); //хранит состояние авто (целостность)
  const [priceFrom, setPriceFrom] = React.useState('');
  const [priceFor, setPriceFor] = React.useState('');

  React.useEffect(() => {
    function setting() {
      if (searchValue) return `&search=${searchValue}`; //поиск
      if (categoryCarID > 0) return `&category=${categoryCarID}`; //класс техники
      if (categoryID > 0) return `&condition=${categoryID}`; //новые -  б.у
      if (stateCar > 0) return `&integrity=${stateCar}`; //состояние авто (целостность)
      if (hozyaeva > 0) return `&owner=${hozyaeva}`; // количество владельцев
      if (marka) return `&title=${marka}`; //// НЕ РАБОТАЕТ
      else return '';
    }

    axios
      .get(
        //search=${searchValue}&category=${categoryCar}&condition=${category}
        `https://6417d9f8cc5fd8ffb1780f3e.mockapi.io/cars/items?${setting()}`,
      )
      .then((res) => {
        setItems(res.data);
      });
  }, [searchValue, categoryCarID, categoryID, stateCar, hozyaeva, marka]);

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
