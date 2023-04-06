import React from 'react';

import Cars from './cars';

const CarsMain = ({ items }) => {
  const car = items.map((item) => <Cars key={item.id} {...item} />);

  return (
    <div className="cars">
      <div className="cars-card">{car}</div>
    </div>
  );
};

export default CarsMain;
