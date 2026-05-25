import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div style={{ padding: '10px', background: '#f0f0f0', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
      <button 
        onClick={() => i18n.changeLanguage('hy')} 
        style={{ fontWeight: i18n.language === 'hy' ? 'bold' : 'normal', cursor: 'pointer' }}
      >
        HY
      </button>
      <button 
        onClick={() => i18n.changeLanguage('en')} 
        style={{ fontWeight: i18n.language === 'en' ? 'bold' : 'normal', cursor: 'pointer' }}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;