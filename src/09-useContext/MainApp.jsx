import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, AboutPage } from './';
import { UserProvider } from './context/UserProvider';
import { Navbar } from './Navbar';

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </UserProvider>
  );
};
