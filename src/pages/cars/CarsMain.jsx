import React from 'react';

import Cars from './cars';

const CarsMain = ({ items, loading }) => {
  const car = items.map((item) => <Cars key={item.id} {...item} />);

  if (loading) {
    return <h2 className="load">Загрузка...</h2>;
  }
  return (
    <div className="cars">
      <div className="cars-card">{car}</div>
    </div>
  );
};

export default CarsMain;
