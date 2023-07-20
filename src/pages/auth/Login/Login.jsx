import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, TextField, Button } from '@mui/material';
import { useForm, Controller, useFormState } from 'react-hook-form';
import { emailValdation, passwordValdation } from '../Validation';

function Login() {
  const { handleSubmit, control } = useForm();
  const { errors } = useFormState({ control });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Typography variant="h2" fontFamily="Poppins" textAlign="center">
        Авторизация
      </Typography>
      <Typography variant="body1" marginBottom={3} fontFamily="Poppins" textAlign="center">
        Введите ваш логин и пароль
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          rules={emailValdation}
          render={({ field }) => (
            <TextField
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={errors.email}
              helperText={errors.email?.message}
              label="Email"
              variant="outlined"
              placeholder="Введите ваш email"
              margin="normal"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={passwordValdation}
          render={({ field }) => (
            <TextField
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
              type="password"
              label="Password"
              variant="outlined"
              placeholder="Введите ваш пароль"
              margin="normal"
            />
          )}
        />
      </form>

      <Button
        onClick={handleSubmit(onSubmit)}
        type="submit"
        sx={{ fontFamily: 'Poppins', margin: 2, width: '60%' }}
        variant="contained">
        Войти
      </Button>

      <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
        У вас нет аккаунта?
        <Link className="registry" to="/register/">
          Регистрация
        </Link>
      </Typography>
    </>
  );
}

export default Login;
