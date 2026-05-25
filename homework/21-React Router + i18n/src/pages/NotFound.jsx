import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '64px', color: '#ff4d4f', margin: 0 }}>404</h1>
      <h2>{t('not_found')}</h2>
      <p>{t('not_found_desc')}</p>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
        ← {t('home')}
      </Link>
    </div>
  );
};

export default NotFound;