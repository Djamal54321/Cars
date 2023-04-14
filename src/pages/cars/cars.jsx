import React from 'react';

import './cars.scss';

function Cars({ imgURL, title, price, description, city, phone }) {
  return (
    <div className="car-one">
      <img className="img-car" src={imgURL} />
      <p className="names carText">
        <strong>{title}</strong>
      </p>
      <p className="prices carText">{price}</p>
      <p className="description ">{description}</p>
      <p className="city carText">{city}</p>
      <p className="phone carText">{phone}</p>
    </div>
  );
}

export default Cars;
