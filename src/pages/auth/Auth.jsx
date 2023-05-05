import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './style.scss';
import { instance } from '../../axios';

import Login from './Login/Login';
import Register from './Register/Register';
import { Box } from '@mui/material';

const Auth = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [repeatPassword, setRepeatPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [userName, setUserName] = React.useState('');

  const location = useLocation(); //хук типа Route, если "это", то "такая-то страница"

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (location.pathname === '/login/') {
      const userData = {
        email: email, // параметр из BackEnd : useState (email)
        password: password, // параметр из BackEnd : useState (password)
      };
      const user = await instance.post('/login/', userData); //запрос на сервер и передача ему введенных данных
    } else {
      if (password === repeatPassword) {
        const userData = {
          email, // то же самое
          password,
          repeatPassword,
          firstName,
          userName,
        };
        const newUser = await instance.post('/register/', userData);
      } else {
        throw new Error('Пароли не сопрадают. Введите одинаковые пароли!');
      }
    }
  };

  return (
    <div className="root">
      <form className="form" onSubmit={handleSubmit}>
        <Box className="box">
          {location.pathname === '/login/' ? (
            <Login setEmail={setEmail} setPassword={setPassword} />
          ) : location.pathname === '/register/' ? (
            <Register
              setEmail={setEmail}
              setPassword={setPassword}
              setRepeatPassword={setRepeatPassword}
              setFirstName={setFirstName}
              setUsername={setUserName}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default Auth;

//Box  - это просто оболочка типа wrapper
