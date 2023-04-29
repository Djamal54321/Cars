import React from 'react';
import { ObjContext } from '../Home';

import './pagination.scss';

function Pagination({ elementPage, totalCars, paginate }) {
  const pageNumbers = []; //номер старницы
  const {
    nextPage, //ПАГГИНАЦИЯ Следующая
    lastPage, //ПАГГИНАЦИЯ Предыдущая
  } = React.useContext(ObjContext);

  for (let i = 1; i <= Math.ceil(totalCars / elementPage); i++) {
    //округляем до целого
    pageNumbers.push(i); //пушим общее любое количество страниц
  }
  return (
    <div>
      <ul className="pagination">
        <button className="btn btn-primary" onClick={lastPage}>
          Предыдущая
        </button>
        <div className="page-data">
          {pageNumbers.map((number) => (
            <li className="page-item" key={number}>
              <a htef="#" className="page-link" onClick={() => paginate(number)}>
                {number}
              </a>
            </li>
          ))}
        </div>
        <button className="btn btn-primary" onClick={nextPage}>
          Следующая
        </button>
      </ul>
    </div>
  );
}

export default Pagination;
