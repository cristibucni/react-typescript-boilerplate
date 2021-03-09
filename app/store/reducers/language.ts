import { SET_LOCALE, LocaleDispatch } from 'store/types';
import { defaultLocale } from 'i18n/locales';

interface LanguageState {
  locale: typeof defaultLocale;
}

const defaultState: LanguageState = {
  locale: defaultLocale,
};

export default (state: LanguageState = defaultState, action: LocaleDispatch): LanguageState => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOCALE:
      localStorage.setItem('locale', payload);
      return { ...state, locale: payload };
    default:
      return state;
  }
};
