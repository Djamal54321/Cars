import React from 'react';
import Burger from './Burger/Burger';
import Search from './Search/Search';
import './header.scss';

function Header() {
  return (
    //Бургер
    <header className="App-header">
      <div className="selected">
        <Burger />
        <span className="logo">
          <h2>АВТОМИР</h2>
        </span>
        <Search />
        <button className="submit" type="submit">
          Войти
        </button>
      </div>
    </header>
  );
}

export default Header;
