import React from 'react';
import { Link } from 'react-router-dom';
import Burger from './Burger/Burger';
import Search from './Search/Search';
import './header.scss';

import { useSelector } from 'react-redux';

function Header() {
  const user = useSelector((state) => state.user); //redux
  return (
    //Бургер
    <header className="App-header">
      <div className="selected">
        <Burger />
        <span className="logo">
          <h2>АВТОМИР</h2>
        </span>
        <Search />
        <p className="loginName">Привет, {user.email}</p>
        <button className="submit" type="submit">
          <Link className="submitText" to="/login/">
            Войти
          </Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
