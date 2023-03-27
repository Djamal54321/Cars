import React from 'react';
import './category.scss';

function Category({ value, onClickategoryID }) {
  const category = ['Все', 'Новые', 'С пробегом'];

  return (
    <div className="btn-category" role="group" aria-label="Basic radio toggle button group">
      <p className="btn-category-text">Показать авто:</p>

      {category.map((categoryName, i) => (
        <label
          key={i}
          onClick={() => onClickategoryID(i)}
          className={value == i ? 'btn btn-category-primary active' : 'btn btn-category-primary'}>
          {categoryName}
        </label>
      ))}
    </div>
  );
}

export default Category;
