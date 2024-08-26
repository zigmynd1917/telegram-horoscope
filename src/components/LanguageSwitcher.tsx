import React from 'react';
import { useLocation } from 'react-router-dom';

import { TranslateIcon } from '../icons/TranslateIcon';
import translations from '../translations.json';

interface LanguageSwitcherProps {
  currentLanguage: 'en' | 'ru';
  onLanguageSwitch: (lang: 'en' | 'ru') => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageSwitch,
}) => {
  const location = useLocation();

  const path = location.pathname;
  const match = path.match(/\/detail\/([a-zA-Z]+)/);
  const zodiacSign = match ? match[1] : '';
  const zodiacName = zodiacSign
    ? translations[currentLanguage].zodiacNames[zodiacSign as keyof typeof translations.en.zodiacNames] || zodiacSign
    : '';

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'ru' : 'en';
    onLanguageSwitch(newLang);
  };

  return (
    <div className="languageSwitcherContainer">
      {zodiacName && <div className="zodiacHeaderName">{zodiacName}</div>}
      <div className="languageSwitcher" onClick={toggleLanguage}>
        <TranslateIcon />
        {currentLanguage === 'en'
          ? translations.en.languageSwitcher
          : translations.ru.languageSwitcher}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
