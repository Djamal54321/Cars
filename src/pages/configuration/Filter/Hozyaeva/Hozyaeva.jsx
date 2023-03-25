import React from 'react';

import './Hozyaeva.scss';

function Hozyaeva() {
  const [active, setActive] = React.useState(0);
  const onClickNumber = (i) => setActive(i);

  const amount = ['1', '2', '3', '4', '..>4'];

  return (
    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group-h me-2" role="group" aria-label="First group">
        <p className="btn-text">Количеcтво хозяев:</p>
        {amount.map((amountName, i) => (
          <button
            key={i}
            onClick={() => onClickNumber(i)}
            type="button"
            className={active == i ? 'btn btn-primary btn-num active' : 'btn btn-primary btn-num'}>
            {amountName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Hozyaeva;
