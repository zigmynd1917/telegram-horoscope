const WebApp = window.Telegram.WebApp;

export const initTelegram = (): 'en' | 'ru' => {
  WebApp.ready();
  const lang = WebApp.initDataUnsafe.user?.language_code || 'en';
  return lang.startsWith('ru') ? 'ru' : 'en';
};
