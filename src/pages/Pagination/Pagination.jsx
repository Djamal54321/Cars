import React from 'react';
import { ObjContext } from '../Home';

import './pagination.scss';

function Pagination({ elementPage, totalCars, onClickCurrentPage, value }) {
  const pageNumbers = []; //номер старницы
  const {
    nextPage, //ПАГГИНАЦИЯ Следующая
    prevPage, //ПАГГИНАЦИЯ Предыдущая
  } = React.useContext(ObjContext);

  for (let i = 1; i <= Math.ceil(totalCars / elementPage); i++) {
    pageNumbers.push(i); //пушим общее количество страниц
  }
  return (
    <div>
      <ul className="pagination browser-default">
        <button className="btn btn-primary" onClick={prevPage}>
          Предыдущая
        </button>
        <div className="page-data">
          {pageNumbers.map((number) => (
            <li className="page-item" key={number}>
              <a
                htef="#"
                className={value == number ? 'page-link active' : 'page-link'}
                onClick={() => onClickCurrentPage(number)}>
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
