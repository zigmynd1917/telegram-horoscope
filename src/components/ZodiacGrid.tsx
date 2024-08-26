import React from 'react';
import { Link } from 'react-router-dom';

import zodiacData from '../data/zodiacData';
import translations from '../translations.json';

interface ZodiacGridProps {
  language: 'ru' | 'en';
}

type Translations = typeof translations['en'];

const ZodiacGrid: React.FC<ZodiacGridProps> = ({ language }) => {
  const getDateRange = (dates: { start: { day: number; month: string }; end: { day: number; month: string } }) => {
    const startMonth = translations[language].months[dates.start.month as keyof Translations['months']];
    const endMonth = translations[language].months[dates.end.month as keyof Translations['months']];
    return `${dates.start.day} ${startMonth} - ${dates.end.day} ${endMonth}`;
  };

  return (
    <div className="zodiacItem">
      {zodiacData.map((zodiac) => (
        <Link key={zodiac.sign} to={`/detail/${zodiac.sign}`} className="zodiacCard">
          <div className="zodiacIcon">{zodiac.icon}</div>
          <div className="zodiacName">{translations[language].zodiacNames[zodiac.sign as keyof typeof translations.en.zodiacNames]}</div>
          <div className="zodiacDates">{getDateRange(zodiac.dates)}</div>
        </Link>
      ))}
    </div>
  );
};

export default ZodiacGrid;
