import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './style.scss';

import LoginCopy from './LoginFormik copy';
import Registry from './RegistryFormik';
import { Box } from '@mui/material';

const AuthFormik = () => {
  const location = useLocation(); //хук типа Route, если "это", то "такая-то страница"

  return (
    <div className="root">
      <div className="form">
        <div className="imgFon">
          <img
            className="img"
            src="http://kalix.club/uploads/posts/2022-12/1672311449_kalix-club-p-tekstura-rezini-besshovnaya-instagram-6.jpg"></img>
        </div>
        <Box className="box">
          {location.pathname === '/login/' ? (
            <LoginCopy />
          ) : location.pathname === '/registry/' ? (
            <Registry />
          ) : null}

          <Link className="to_main" to="/">
            На главную{' '}
          </Link>
        </Box>
      </div>
    </div>
  );
};

export default AuthFormik;
