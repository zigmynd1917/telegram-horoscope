import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { initTelegram } from './telegram';

import ZodiacGrid from './components/ZodiacGrid';
import ZodiacDetail from './components/ZodiacDetail';
import LanguageSwitcher from './components/LanguageSwitcher';

import './App.css';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'ru'>('en');

  useEffect(() => {
    const lang = initTelegram();
    setLanguage(lang);
  }, []);

  const handleLanguageSwitch = (lang: 'en' | 'ru') => {
    setLanguage(lang);
  };

  return (
    <Router>
      <div className="appContainer">
        <LanguageSwitcher
          currentLanguage={language}
          onLanguageSwitch={handleLanguageSwitch}
        />
        <Routes>
          <Route path="/" element={<ZodiacGrid language={language} />} />
          <Route path="/detail/:sign" element={<ZodiacDetail language={language} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
