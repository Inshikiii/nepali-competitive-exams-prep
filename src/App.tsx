import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import DashboardPage from './pages/DashboardPage';
import CoursePage from './pages/CoursePage';
import CertificatePage from './pages/CertificatePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="courses" element={<CoursePage />} />
        <Route path="certificate" element={<CertificatePage />} />
      </Route>
    </Routes>
  );
}

export default App;