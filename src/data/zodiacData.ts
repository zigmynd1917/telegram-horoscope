interface Zodiac {
  sign: string;
  dates: { start: { day: number; month: string }, end: { day: number; month: string } };
  icon: string;
}


export const zodiacData: Zodiac[] = [
  {
    sign: 'aries',
    icon: '♈',
    dates: { start: { day: 21, month: 'march' }, end: { day: 19, month: 'april' } },
  },
  {
    sign: 'taurus',
    icon: '♉',
    dates: { start: { day: 20, month: 'april' }, end: { day: 20, month: 'may' } },
  },
  {
    sign: 'gemini',
    icon: '♊',
    dates: { start: { day: 21, month: 'may' }, end: { day: 20, month: 'june' } },
  },
  {
    sign: 'cancer',
    icon: '♋',
    dates: { start: { day: 21, month: 'june' }, end: { day: 22, month: 'july' } },
  },
  {
    sign: 'leo',
    icon: '♌',
    dates: { start: { day: 23, month: 'july' }, end: { day: 22, month: 'august' } },
  },
  {
    sign: 'virgo',
    icon: '♍',
    dates: { start: { day: 23, month: 'august' }, end: { day: 22, month: 'september' } },
  },
  {
    sign: 'libra',
    icon: '♎',
    dates: { start: { day: 23, month: 'september' }, end: { day: 22, month: 'october' } },
  },
  {
    sign: 'scorpio',
    icon: '♏',
    dates: { start: { day: 23, month: 'october' }, end: { day: 21, month: 'november' } },
  },
  {
    sign: 'sagittarius',
    icon: '♐',
    dates: { start: { day: 22, month: 'november' }, end: { day: 21, month: 'december' } },
  },
  {
    sign: 'capricorn',
    icon: '♑',
    dates: { start: { day: 22, month: 'december' }, end: { day: 19, month: 'january' } },
  },
  {
    sign: 'aquarius',
    icon: '♒',
    dates: { start: { day: 20, month: 'january' }, end: { day: 18, month: 'february' } },
  },
  {
    sign: 'pisces',
    icon: '♓',
    dates: { start: { day: 19, month: 'february' }, end: { day: 20, month: 'march' } },
  },
];

export default zodiacData;
