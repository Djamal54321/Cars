import React from 'react';

function Korobka() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const onClickActive = (i) => {
    setActive(i);
  };

  const category = [
    'Автоматическая',
    'Робот',
    'Вариатор',
    'Механика',
    'Коробка или ящик — негерметичная ёмкость в форме многогранника (чаще всего — прямоугольного параллелепипеда), выполненная из картона или другого плотного материала.',
  ];

  return (
    <div className="btn-group car" role="group">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={() => setOpen(!open)}>
        Коробка
      </button>

      {open && (
        <ul className="dropdown-menu">
          {category.map((categoryName, i) => (
            <li
              onClick={() => onClickActive(i)}
              className={active == i ? 'dropdown-item active' : 'dropdown-item'}
              href="#">
              <a>{categoryName}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Korobka;
