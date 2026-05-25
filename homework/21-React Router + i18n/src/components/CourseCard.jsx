import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CourseCard = ({ id, title, teacher }) => {
  const { t } = useTranslation();

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      borderRadius: '8px', 
      width: '250px',
      background: '#fff',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
    }}>
      <h3>{title}</h3>
      <p><strong>{t('teacher')}:</strong> {teacher}</p>
      
      {}
      <Link to={`/courses/${id}`} style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
        {t('view_details')} →
      </Link>
    </div>
  );
};

export default CourseCard;