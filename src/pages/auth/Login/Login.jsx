import React from 'react';
import { Typography, TextField, Button } from '@mui/material';

function Login() {
  return (
    <>
      <Typography variant="h2" fontFamily="Popins" textAlign="center">
        Авторизация
      </Typography>
      <Typography variant="body1" marginBottom={3} fontFamily="Popins" textAlign="center">
        Введите ваш логин и пароль
      </Typography>

      <TextField
        fullWidth={true}
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
        margin="normal"
      />
      <TextField
        fullWidth={true}
        label="Password"
        variant="outlined"
        placeholder="Введите ваш пароль"
        margin="normal"
      />
      <Button sx={{ fontFamily: 'Popins', margin: 2, width: '60%' }} variant="contained">
        Войти
      </Button>

      <Typography variant="body1" sx={{ fontFamily: 'Popins' }}>
        У вас нет аккаунта?
        <span className="registry">Регистрация</span>
      </Typography>
    </>
  );
}

export default Login;
