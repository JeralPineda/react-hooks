import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, AboutPage } from './';

export const MainApp = () => {
  return (
    <div>
      <h1>MainApp</h1>
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </div>
  );
};
