import React from 'react';

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
  const [categoryCarID, setCategoryCarID] = React.useState(0);
  const [categoryID, setCategoryID] = React.useState(0);

  return (
    <div className="filter">
      <CategoryCar value={categoryCarID} onClickCategoryCarID={(i) => setCategoryCarID(i)} />
      <div className="filterClass">
        <Category value={categoryID} onClickCategoryID={(i) => setCategoryID(i)} />
        <div className="btn-group setting">
          <Marka />
          <Korobka />
          <Dvigatel />
          <Volume />
        </div>
        <div className="btn-group setting">
          <Hozyaeva />
          <StateCar />
          <Price />
        </div>
      </div>
    </div>
  );
}

export default Configuration;
