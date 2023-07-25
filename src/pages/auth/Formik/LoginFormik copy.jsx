import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import './style.scss';

const initialValues = { email: '', password: '' };

const onSubmit = (values, onSubmitProps) => {
  console.log('Form data', values);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validate = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = '* Поле обязательно для заполнения';
  } else if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Введите корректно свой email';
  }

  if (!values.password) {
    errors.password = '* Поле обязательно для заполнения';
  } else if (!/([А-Я0-9]{1}[а-яё0-9]{5,23}|[A-Z0-9]{1}[a-z0-9]{5,23})$/i.test(values.password)) {
    errors.password = 'Пароль должен содержать не менее 6-ти символов';
  }
  return errors;
};

const LoginCopy = () => {
  const { handleSubmit } = useForm();

  return (
    <div>
      <Typography variant="h2" fontFamily="Poppins" textAlign="center">
        Авторизация
      </Typography>
      <Typography variant="body1" marginBottom={3} fontFamily="Poppins" textAlign="center">
        Введите ваш логин и пароль
      </Typography>
      <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
        <Form className="form">
          <div className="form-control">
            <Field
              onSubmit={handleSubmit}
              id="email"
              className="form-input"
              name="email"
              type="email"
              placeholder="Введите ваш email"
            />
            <ErrorMessage className="error" name="email" />
          </div>

          <div className="form-control">
            <Field
              onSubmit={handleSubmit}
              id="passwords"
              className="form-input"
              name="password"
              type="password"
              placeholder="Введите ваш пароль"
            />
            <ErrorMessage className="error" name="password" />
          </div>

          <Button
            onClick={handleSubmit}
            type="submit"
            sx={{ fontFamily: 'Poppins', margin: 0, width: '100%' }}
            variant="contained">
            Войти
          </Button>
        </Form>
      </Formik>

      <Typography variant="body1" sx={{ fontFamily: 'Poppins', textAlign: 'center' }}>
        У вас нет аккаунта?
        <Link className="registry" to="/registry/">
          Регистрация
        </Link>
      </Typography>
    </div>
  );
};

export default LoginCopy;
