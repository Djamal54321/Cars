import React from 'react';
import './categoryCar.scss';

function CategoryCar({ value, onClickCategoryCarID }) {
  const categories = ['мотоциклы', 'легковые', 'внедорожники', 'грузовые', 'истребители', 'танки'];

  return (
    <div className="categoryCar">
      <ul className="categoryCarSetting">
        {categories.map((categoryName, i) => (
          <button
            key={i}
            onClick={() => onClickCategoryCarID(i)}
            className={value == i ? 'btn btn-car active' : 'btn btn-car'}>
            {categoryName}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default CategoryCar;
