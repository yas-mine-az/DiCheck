import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import RegisterPage from './pages/register-page.js';
import LoginPage from './pages/login-page';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Tambahkan Route lainnya di sini */}
      </Routes>
    </Router>
  );
}

export default App;