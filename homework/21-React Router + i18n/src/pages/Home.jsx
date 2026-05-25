import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '20px' }}>
      {}
      <h1>{t('welcome')}</h1>
      <Link to="/courses" style={{ fontSize: '18px', color: '#007bff' }}>
        {t('courses')} →
      </Link>
    </div>
  );
};

export default Home;