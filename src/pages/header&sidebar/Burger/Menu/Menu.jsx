import React from 'react';
import './Menu.scss';

const Menu = ({ header, items, active, setActive }) => {
  return (
    <div className={active ? 'menu active ' : 'menu '} onClick={() => setActive(false)}>
      <div className={active ? 'blur' : 'menu '}></div>
      <div className="menu_content" onClick={(e) => e.stopPropagation()}>
        <div className="menu_header">{header}</div>
        <ul>
          {items.map((item) => (
            <li>
              <div className="material-icons">{item.icon}</div>
              <a href={item.href}>{item.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
