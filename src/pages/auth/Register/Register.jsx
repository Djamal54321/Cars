import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, TextField, Button } from '@mui/material';

function Register(props) {
  const { handleSubmit, setEmail, setPassword, setRepeatPassword, setFirstName, setUserName } =
    props;
  return (
    <>
      <Typography variant="h2" fontFamily="Poppins" textAlign="center">
        Регистрация
      </Typography>
      <Typography variant="body1" marginBottom={3} fontFamily="Poppins" textAlign="center">
        Введите данные для регистрации
      </Typography>

      <TextField
        fullWidth={true} // во всю длину окна
        label="Имя"
        variant="outlined"
        placeholder="Введите ваше имя"
        margin="normal"
        onChange={(e) => setFirstName(e.target.value)} //Передаем в state все,что ввели
      />
      <TextField
        fullWidth={true}
        label="UserName"
        variant="outlined"
        placeholder="Введите ваш ник"
        margin="normal"
        onChange={(e) => setUserName(e.target.value)}
      />

      <TextField
        fullWidth={true}
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
        margin="normal"
        onChange={(e) => setEmail(e.target.values)}
      />
      <TextField
        fullWidth={true}
        type="password"
        label="Password"
        variant="outlined"
        placeholder="Введите ваш пароль"
        margin="normal"
        onChange={(e) => setPassword(e.target.values)}
      />
      <TextField
        fullWidth={true}
        type="password"
        label="Password"
        variant="outlined"
        placeholder="Повторите ваш пароль"
        margin="normal"
        onChange={(e) => setRepeatPassword(e.target.values)}
      />
      <Button
        onClick={handleSubmit}
        type="submit"
        sx={{ fontFamily: 'Poppins', margin: 2, width: '60%' }}
        variant="contained">
        Регистрация
      </Button>

      <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
        У вас есть аккаунта?
        <Link className="registry" to="/login/">
          Авторизация
        </Link>
      </Typography>
    </>
  );
}

export default Register;
