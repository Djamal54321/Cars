import React from 'react';
import './filter.scss';

import Category from './Category/Category';
import Marka from './Marka/Marka';
import Korobka from './Korobka/Korobka';
import Dvigatel from './Dvigatel/Dvigatel';
import Volume from './Volume/Volume';
import Hozyaeva from './Hozyaeva/Hozyaeva';
import StateCar from './StateCar/StateCar';
import Price from './Price/Price';

function Filter({ value, onClickategoryID }) {
  return (
    <div className="filter">
      <div className="filterClass">
        <Category value={value} onClickategoryID={onClickategoryID} />
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

export default Filter;
