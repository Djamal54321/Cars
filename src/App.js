import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
//import Auth from './pages/auth/Auth';
import AuthFormik from './pages/auth/Formik/AuthFormik';
//import LoginFormik from './pages/auth/Formik/LoginFormik';

import './index.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthFormik />} />
        <Route path="/registry" element={<AuthFormik />} />
      </Routes>
    </div>
  );
}

export default App;
