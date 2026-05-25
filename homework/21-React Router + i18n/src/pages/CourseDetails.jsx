import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { coursesData } from './Courses'; 

const CourseDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();


  const course = coursesData.find(c => c.id === parseInt(id));


  if (!course) {
    return (
      <div style={{ padding: '20px' }}>
        <h3>Course not found!</h3>
        <Link to="/courses">{t('back_to_courses')}</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{t('course_details')}</h2>
      <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', maxWidth: '400px', marginTop: '15px' }}>
        <h1>{course.title}</h1>
        <p><strong>ID:</strong> {course.id}</p>
        <p><strong>{t('teacher')}:</strong> {course.teacher}</p>
      </div>
      <br />
      <Link to="/courses" style={{ color: '#007bff' }}>← {t('back_to_courses')}</Link>
    </div>
  );
};

export default CourseDetails;