import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from '../lang';

i18n.use(initReactI18next).init({
  resources,
  options: {},
  lng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
