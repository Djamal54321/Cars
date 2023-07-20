import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, TextField, Button } from '@mui/material';
import { useForm, Controller, useFormState } from 'react-hook-form';
import { nameValdation, surnameValdation, emailValdation, passwordValdation } from '../Validation';

function Register() {
  const { handleSubmit, register, control, reset } = useForm();
  const { errors } = useFormState({ control });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Typography variant="h2" fontFamily="Poppins" textAlign="center">
        Регистрация
      </Typography>
      <Typography variant="body1" marginBottom={3} fontFamily="Poppins" textAlign="center">
        Введите данные для регистрации
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          rules={{ nameValdation }}
          render={({ field }) => (
            <TextField
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.name?.message}
              helperText={errors.name?.message}
              label="Имя"
              variant="outlined"
              placeholder="Введите ваше имя"
              margin="normal"
            />
          )}></Controller>

        <Controller
          control={control}
          name="surname"
          rules={surnameValdation}
          render={({ field }) => (
            <TextField
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.surname?.message}
              helperText={errors.surname?.message}
              label="Фамилия"
              variant="outlined"
              placeholder="Введите вашу фамилию"
              margin="normal"
            />
          )}></Controller>

        <Controller
          control={control}
          name="email"
          rules={emailValdation}
          render={({ field }) => (
            <TextField
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.email?.message}
              helperText={errors.email?.message}
              label="Email"
              variant="outlined"
              placeholder="Введите ваш email"
              margin="normal"
            />
          )}></Controller>

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
          )}></Controller>

        <label form="gender">Укажите ваш пол </label>
        <select {...register('gender')}>
          <option value="Мужской">Мужской</option>
          <option value="Женский">Женский</option>
        </select>
      </form>

      <Button
        id="button"
        name="button"
        onClick={handleSubmit(onSubmit)}
        type="submit"
        sx={{ fontFamily: 'Poppins', margin: 2, width: '60%' }}
        variant="contained">
        Регистрация
      </Button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="reset">Стереть введённые данные</label>
        <input
          type="button"
          onClick={() => {
            reset();
          }}
        />
      </form>

      <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
        У вас есть аккаунта?
        <Link className="login" to="/login/">
          Авторизация
        </Link>
      </Typography>
    </>
  );
}

export default Register;
