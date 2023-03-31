import React from 'react';

function Marka() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const onClickActive = (i) => {
    setActive(i);
  };

  const category = [
    'Toyota',
    'Kia',
    'Tesla',
    'Ferrari',
    'Продукция "АВТОВАЗ" - в категории "Вёдра!"',
  ];

  return (
    <div className="btn-group car" role="group">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={() => setOpen(!open)}>
        Марка
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

export default Marka;
