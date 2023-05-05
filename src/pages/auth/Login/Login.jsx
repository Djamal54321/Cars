import React from 'react';
import { Typography, TextField, Button } from '@mui/material';

function Login(props) {
  const { setEmail, setPassword } = props;

  return (
    <>
      <Typography variant="h2" fontFamily="Poppins" textAlign="center">
        Авторизация
      </Typography>
      <Typography variant="body1" marginBottom={3} fontFamily="Poppins" textAlign="center">
        Введите ваш логин и пароль
      </Typography>

      <TextField
        fullWidth={true}
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth={true}
        label="Password"
        variant="outlined"
        placeholder="Введите ваш пароль"
        margin="normal"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <Button
        type="submit"
        sx={{ fontFamily: 'Poppins', margin: 2, width: '60%' }}
        variant="contained">
        Войти
      </Button>

      <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
        У вас нет аккаунта?
        <span className="registry">Регистрация</span>
      </Typography>
    </>
  );
}

export default Login;
