import React from 'react';
import './StateCar.scss';

function StateCar({ value, onClickStateCarID }) {
  const category = ['Все', 'Кроме битых', 'Битые'];

  return (
    <div className="stateCar" role="group" aria-label="Large button group">
      <div className="btn-stateCar">
        {category.map((categoryName, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onClickStateCarID(i)}
            className={value == i ? 'btn btn-stateCar active' : 'btn btn-stateCar'}>
            {categoryName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default StateCar;
