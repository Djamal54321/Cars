import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import Example from './burger_pages/Example';

import './Menu.scss';

const Menu = ({ header, items, active, setActive }) => {
  const location = useLocation();
  return (
    <div className={active ? 'menu active ' : 'menu '} onClick={() => setActive(false)}>
      <div className={active ? 'blur' : 'menu '}></div>
      <div className="menu_content" onClick={(e) => e.stopPropagation()}>
        <div className="menu_header">{header}</div>
        <ul>
          {items.map((item) => (
            <li>
              <div className="icons">{item.icon}</div>
              <a href={item.href} target="_blank">
                {item.value}
              </a>
            </li>
          ))}
        </ul>

        {/* <Link className="submitText" to="/exampl">
          ...еще что-нибудь...
        </Link> */}

        <div>{location.pathname === '/example' ? <Example /> : null}</div>

        <div className="App">
          <Routes>
            <Route path="/example" element={<Example />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Menu;
