import React from 'react';
import axios from 'axios';

import Cars from './cars';

const CarsMain = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://6417d9f8cc5fd8ffb1780f3e.mockapi.io/cars/items').then((res) => {
      setItems(res.data);
    });
  }, []);

  const car = items.map((item) => <Cars key={item.id} {...item} />);

  return (
    <div className="cars">
      <div className="cars-card">{car}</div>
    </div>
  );
};

export default CarsMain;
