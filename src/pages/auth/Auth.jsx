import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';

import Login from './Login/Login';
import Register from './Register/Register';
import { Box } from '@mui/material';
import { login } from '../../redux/Slices/userSlice';

const Auth = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [userName, setUserName] = React.useState('');

  const location = useLocation(); //хук типа Route, если "это", то "такая-то страница"

  const user = useSelector((state) => state.user); //redux
  const dispatch = useDispatch(); //redux

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));

    if (password === repeatPassword) {
      const userData = {
        email, // то же самое
        password,
        repeatPassword,
        firstName,
        userName,
      };
    } else {
      throw new Error('Пароли не сопрадают. Введите одинаковые пароли!');
    }
  };

  return (
    <div className="root">
      <form className="form" onSubmit={handleSubmit}>
        <Box className="box">
          {location.pathname === '/login/' ? (
            <Login handleSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword} />
          ) : location.pathname === '/register/' ? (
            <Register
              handleSubmit={handleSubmit}
              setEmail={setEmail}
              setPassword={setPassword}
              setRepeatPassword={setRepeatPassword}
              setFirstName={setFirstName}
              setUsername={setUserName}
            />
          ) : null}

          <Link className="to_main" to="/">
            На главную{' '}
          </Link>
        </Box>
      </form>
    </div>
  );
};

export default Auth;

//Box  - это просто оболочка типа wrapper
