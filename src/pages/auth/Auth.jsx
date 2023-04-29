import React from 'react';
import { useLocation } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import { Box } from '@mui/material';

import './style.scss';

const Auth = () => {
  const location = useLocation(); //хук типа Route, если "это", то "такая-то страница"

  return (
    <div className="root">
      <div className="form">
        <Box className="box">
          {location.pathname === '/login/' ? (
            <Login />
          ) : location.pathname === '/register/' ? (
            <Register />
          ) : null}
        </Box>
      </div>
    </div>
  );
};

export default Auth;

//Box  - это просто оболочка типа wrapper
