import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  zh: () => import('@/dictionaries/zh.json').then(module => module.default),
  ms: () => import('@/dictionaries/ms.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => {
  if (!Object.keys(dictionaries).includes(locale)) {
    return await dictionaries['en']();
  }

  const dictionaryFunction = dictionaries[locale];
  if (!dictionaryFunction) {
    throw new Error(`Dictionary function for locale '${locale}' not found`);
  }

  return await dictionaryFunction();
};
