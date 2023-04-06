import React from 'react';
import { SearchContext } from '../../App';

import './configuration.scss';

import CategoryCar from './CategoryCar/CategoryCar';
import Category from './Category/Category';
import Marka from './Marka/Marka';
import Korobka from './Korobka/Korobka';
import Dvigatel from './Dvigatel/Dvigatel';
import Volume from './Volume/Volume';
import Hozyaeva from './Hozyaeva/Hozyaeva';
import StateCar from './StateCar/StateCar';
import Price from './Price/Price';

function Configuration() {
  const { categoryCarID, setCategoryCarID } = React.useContext(SearchContext);
  const [categoryID, setCategoryID] = React.useState(0);
  const [marka, setMarka] = React.useState(false);
  const [korobka, setKorobka] = React.useState(false);
  const [dvigatel, setDvigatel] = React.useState(false);
  const [volume, setVolume] = React.useState(false);
  const [hozyaeva, setHozyaeva] = React.useState(false);
  const [stateCar, setStateCar] = React.useState(false);
  const [priceFrom, setPriceFrom] = React.useState('');
  const [priceFor, setPriceFor] = React.useState('');

  return (
    <div className="filter">
      <CategoryCar value={categoryCarID} onClickCategoryCarID={(i) => setCategoryCarID(i)} />
      <div className="filterClass">
        <Category value={categoryID} onClickCategoryID={(i) => setCategoryID(i)} />
        <div className="btn-group setting">
          <Marka value={marka} onClickMarkaID={(i) => setMarka(i)} />
          <Korobka value={korobka} onClickKorobkaID={(i) => setKorobka(i)} />
          <Dvigatel value={dvigatel} onClickDvigatelID={(i) => setDvigatel(i)} />
          <Volume value={volume} onClickVolumeID={(i) => setVolume(i)} />
        </div>
        <div className="btn-group setting">
          <Hozyaeva value={hozyaeva} onClickHozyaevaID={(i) => setHozyaeva(i)} />
          <StateCar value={stateCar} onClickStateCarID={(i) => setStateCar(i)} />
          <Price
            value1={priceFrom}
            value2={priceFor}
            onClickPrice1={setPriceFrom}
            onClickPrice2={setPriceFor}
          />
        </div>
      </div>
    </div>
  );
}

export default Configuration;
