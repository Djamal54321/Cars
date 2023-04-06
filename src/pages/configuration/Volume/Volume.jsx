import React from 'react';

function Volume({ value, onClickVolumeID }) {
  const [active, setActive] = React.useState(0);
  const onClickActive = (i) => {
    setActive(i);
  };

  const catogory = [
    '0.2 л. - 0.5 л.',
    '0.6 л. - 1.0 л.',
    '1.1 л. - 1.5 л.',
    '1.6 л. - 2.0 л.',
    '2.0 л. - 2.5 л.',
    '2.6 л. - 3.0 л.',
    '3.1 л. - 3.5 л.',
    '3.6 л. - 4.0 л.',
    ' > 4.1 л.',
    'V = a * b * c',
  ];
  return (
    <div className="btn-group car" role="group">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={() => onClickVolumeID(!value)}>
        Объем
      </button>
      {value && (
        <ul className="dropdown-menu">
          {catogory.map((categoryName, i) => (
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

export default Volume;
