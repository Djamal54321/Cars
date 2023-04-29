import React from 'react';
import { Typography, TextField, Button } from '@mui/material';

function Register() {
  return (
    <>
      <Typography variant="h2" fontFamily="Popins" textAlign="center">
        Регистрация
      </Typography>
      <Typography variant="body1" marginBottom={3} fontFamily="Popins" textAlign="center">
        Введите данные для регистрации
      </Typography>

      <TextField
        fullWidth={true}
        label="Имя"
        variant="outlined"
        placeholder="Введите ваше имя"
        margin="normal"
      />
      <TextField
        fullWidth={true}
        label="UserName"
        variant="outlined"
        placeholder="Введите ваш ник"
        margin="normal"
      />

      <TextField
        fullWidth={true}
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
        margin="normal"
      />
      <TextField
        fullWidth={true}
        type="password"
        label="Password"
        variant="outlined"
        placeholder="Введите ваш пароль"
        margin="normal"
      />
      <TextField
        fullWidth={true}
        type="password"
        label="Password"
        variant="outlined"
        placeholder="Повторите ваш пароль"
        margin="normal"
      />
      <Button sx={{ fontFamily: 'Popins', margin: 2, width: '60%' }} variant="contained">
        Регистрация
      </Button>

      <Typography variant="body1" sx={{ fontFamily: 'Popins' }}>
        У вас есть аккаунта?
        <span className="registry">Авторизация</span>
      </Typography>
    </>
  );
}

export default Register;
