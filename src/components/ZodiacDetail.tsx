import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import translations from '../translations.json';

interface ZodiacDetailProps {
  language: 'ru' | 'en';
}

interface Horoscope {
  horoscope: string;
}

const ZodiacDetail: React.FC<ZodiacDetailProps> = ({ language }) => {
  const [horoscope, setHoroscope] = useState<Horoscope | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { sign } = useParams();
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHoroscope = async () => {
      setLoading(true); 
      setError(null);   

      try {
        const response = await fetch('https://poker247tech.ru/get_horoscope/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sign,
            language: language === 'ru' ? 'original' : 'translated',
            period: 'today',
          }),
        });

        if (!response.ok) {
          throw new Error(`${translations[language].error} ${response.statusText}`);
        }

        const data = await response.json();
        setHoroscope(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchHoroscope();
  }, [sign, language]);

  return (
    <div className="zodiacDetail">
      {loading && <p>{translations[language].loading}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {horoscope && <p>{horoscope.horoscope}</p>}

      {!loading && (
        <button className='zodiacDetailButton' onClick={() => navigate('/')}>
          {translations[language].backButton}
        </button>
      )}
    </div>
  );
};

export default ZodiacDetail;
