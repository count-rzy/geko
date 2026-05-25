import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {

  en: {
    translation: {
      "welcome": "Welcome to our Multi-Language Course Platform",
      "home": "Home",
      "courses": "Courses",
      "view_details": "View Details",
      "teacher": "Teacher",
      "course_details": "Course Details",
      "back_to_courses": "Back to Courses",
      "not_found": "404 - Page Not Found",
      "not_found_desc": "The page you are looking for does not exist."
    }
  },

  hy: {
    translation: {
      "welcome": "Բարի գալուստ բազմալեզու դասընթացների հարթակ",
      "home": "Գլխավոր",
      "courses": "Դասընթացներ",
      "view_details": "Տեսնել ավելին",
      "teacher": "Դասախոս",
      "course_details": "Դասընթացի մանրամասները",
      "back_to_courses": "Վերադառնալ դասընթացներին",
      "not_found": "404 - Էջը չի գտնվել",
      "not_found_desc": "Ձեր փնտրած էջը գոյություն չունի։"
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'hy', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;