import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './style.scss';

import Login from './Login/Login';
import Register from './Register/Register';

const Auth = () => {
  const location = useLocation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  //   if (password === repeatPassword) {
  //     const userData = {
  //       email, // то же самое
  //       password,
  //       repeatPassword,
  //       firstName,
  //       userName,
  //     };
  //   } else {
  //     throw new Error('Пароли не сопрадают. Введите одинаковые пароли!');
  //   }
  // };

  return (
    <div className="root">
      <div className="form" onSubmit={handleSubmit}>
        <div className="box">
          {location.pathname === '/login/' ? (
            <Login />
          ) : location.pathname === '/register/' ? (
            <Register />
          ) : null}
          <Link className="to_main" to="/">
            На главную{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
