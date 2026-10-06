import { es } from './es';
import { en } from './en';

export const languages = { es: 'Español', en: 'English' } as const;
export const defaultLang = 'es';
export type Lang = keyof typeof languages;

const dictionaries = { es, en } as const;
export type Dict = typeof es;

export function getLang(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first in languages ? (first as Lang) : defaultLang;
}

export function t(lang: Lang): Dict {
  return dictionaries[lang] as Dict;
}

/** Ruta de la home en cada idioma. */
export function homePath(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}
