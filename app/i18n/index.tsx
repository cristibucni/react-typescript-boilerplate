import { LOCALES } from 'i18n/locales';
import React from 'react';

import EnFlag from 'assets/icons/gb.svg';
import RoFlag from 'assets/icons/ro.svg';

export { default as LanguageProvider } from 'i18n/provider';

interface Language {
  name: string;
  img: React.ReactNode;
  locale: string;
}

export const countriesDropdown: Language[] = [
  {
    name: 'english',
    img: <EnFlag style={{ width: '30px' }} />,
    locale: LOCALES.ENGLISH,
  },
  {
    name: 'romanian',
    img: <RoFlag style={{ width: '30px' }} />,
    locale: LOCALES.ROMANIAN,
  },
];
