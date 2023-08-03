import React from 'react';
import { ObjContext } from '../Home';

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
  const {
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
  } = React.useContext(ObjContext);

  return (
    <div className="filter">
      <div className="filterClass">
        <CategoryCar value={categoryCarID} onClickCategoryCarID={(i) => setCategoryCarID(i)} />
        <Category value={categoryID} onClickCategoryID={(i) => setCategoryID(i)} />
        <div className="btn-group setting">
          <Marka value={marka} onClickMarkaID={(i) => setMarka(i)} />
          <Korobka value={korobka} onClickKorobkaID={(i) => setKorobka(i)} />
          <Dvigatel value={dvigatel} onClickDvigatelID={(i) => setDvigatel(i)} />
          <Volume value={volume} onClickVolumeID={(i) => setVolume(i)} />
        </div>
        <div className="btn-group settingTwo">
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
