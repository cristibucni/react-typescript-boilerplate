export const LOCALES = {
  ENGLISH: 'en-US',
  ROMANIAN: 'ro-RO',
};

const localStorageLocale = localStorage.getItem('locale');

export const defaultLocale: string = localStorageLocale || LOCALES.ENGLISH;
