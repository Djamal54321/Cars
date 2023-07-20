import React from 'react';
import axios from 'axios';

import './Home.scss';

import Header from './header&sidebar/Header';
import Configuration from './configuration/Configuration';
import CarsMain from './cars/CarsMain';
import Pagination from './Pagination/Pagination';

export const ObjContext = React.createContext();

function Home() {
  const [items, setItems] = React.useState([]); //хранит данные машин
  const [loading, setLoading] = React.useState(false); // начало и конец загрузки
  const [currentPage, setCurrentPage] = React.useState(1); //отображение нужной страницы ПАГГИНАЦИЯ
  const [elementPage] = React.useState(3); //количество элементов на странице ПАГГИНАЦИЯ

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
    setLoading(true);
    axios.get(`https://6417d9f8cc5fd8ffb1780f3e.mockapi.io/cars/items?${setting()}`).then((res) => {
      setItems(res.data);
      setLoading(false);
    });
  }, [searchValue, categoryCarID, categoryID, stateCar, hozyaeva, marka]);

  //ПАГГИНАЦИЯ
  const lastPageIndex = currentPage * elementPage; //последняя страница
  const firstPAgeIndex = lastPageIndex - elementPage; //первая страница
  const currentCar = items.slice(firstPAgeIndex, lastPageIndex); //текущая страница
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => (prev < lastPageIndex ? prev + 1 : lastPageIndex));
  const lastPage = () => setCurrentPage((prev) => (prev > firstPAgeIndex ? 1 : prev - 1));

  return (
    <div className="Home">
      <div className="pictures">
        <img src="../../files/fon.jpg"></img>
      </div>
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
          nextPage, //ПАГГИНАЦИЯ Следующая
          lastPage, //ПАГГИНАЦИЯ Предыдущая
        }}>
        <Header />
        <Configuration />
        <CarsMain items={currentCar} loading={loading} />

        <Pagination elementPage={elementPage} totalCars={items.length} paginate={paginate} />
      </ObjContext.Provider>
    </div>
  );
}

export default Home;
