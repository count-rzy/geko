import React from 'react';
import { useTranslation } from 'react-i18next';
import CourseCard from '../components/CourseCard';


export const coursesData = [
  { id: 1, title: 'React + Node.js Fullstack', teacher: 'Alex Smith' },
  { id: 2, title: 'Python Machine Learning', teacher: 'John Doe' },
  { id: 3, title: 'UI/UX Design Basics', teacher: 'Anna Bars' },
];

const Courses = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '20px' }}>
      <h2>{t('courses')}</h2>
      
      {}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        {coursesData.map(course => (
          <CourseCard 
            key={course.id}
            id={course.id}
            title={course.title}
            teacher={course.teacher}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;