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
        <div>
          <video
            className="bg-video"
            loop
            autoplay
            //muted
            src="https://youtu.be/cwA9PuTSuRc"
            type="video.mp4"></video>
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
