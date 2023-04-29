import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/auth/Auth';

import './index.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
