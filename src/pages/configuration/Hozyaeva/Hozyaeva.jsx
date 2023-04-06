import React from 'react';

import './Hozyaeva.scss';
//{hozyaeva, setHozyaeva}
function Hozyaeva({ value, onClickHozyaevaID }) {
  const amount = ['1', '2', '3', '4', '..>4'];

  return (
    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group-h me-2" role="group" aria-label="First group">
        <p className="btn-text">Количеcтво хозяев:</p>
        {amount.map((amountName, i) => (
          <button
            key={i}
            onClick={() => onClickHozyaevaID(i)}
            type="button"
            className={value == i ? 'btn btn-primary btn-num active' : 'btn btn-primary btn-num'}>
            {amountName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Hozyaeva;
