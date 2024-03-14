import React from 'react';
import { useTranslation } from 'react-i18next';


const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const otherLanguage = i18n.language === 'en' ? 'ar' : 'en';
  return (
    <div className='mx-3'>
      <button className='text-white text-sm' onClick={() => changeLanguage(otherLanguage)}>
        {otherLanguage === 'en' ? 'English' : 'Arabic'}
      </button>
    </div>

  );
};

export default LanguageSelector;
