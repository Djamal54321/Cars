import React from 'react';
import './categoryCar.scss';

function CategoryCar() {
  const [active, setActive] = React.useState(0);

  const onClickCategoryCar = (index) => {
    setActive(index);
  };

  const categories = ['мотоциклы', 'легковые', 'внедорожники', 'грузовые', 'истребители', 'танки'];

  return (
    <div className="category">
      <ul className="categoryCar">
        {categories.map((categoryName, i) => (
          <button
            key={i}
            onClick={() => onClickCategoryCar(i)}
            className={active == i ? 'btn btn-car active' : 'btn btn-car'}>
            {categoryName}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default CategoryCar;
