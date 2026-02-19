import { translations } from './translations';

export function t(lang = 'en', key) {
  const value = translations?.[lang]?.[key];

  if (value === undefined) {
    console.warn(`Missing translation → ${lang}.${key}`);
    return translations?.en?.[key] ?? key;
  }

  return value;
}
