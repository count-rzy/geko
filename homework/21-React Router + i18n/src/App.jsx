import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import NotFound from './pages/NotFound';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      {}
      <LanguageSwitcher />

      {}
      <nav style={{ padding: '15px', borderBottom: '1px solid #ddd', display: 'flex', gap: '15px', background: '#fff' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>{t('home')}</Link>
        <Link to="/courses" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>{t('courses')}</Link>
      </nav>

      {}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        {}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;