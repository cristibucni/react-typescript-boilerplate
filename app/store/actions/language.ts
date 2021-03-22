import { SET_LOCALE } from 'store/types';

export function setLocale(payload: string) {
  return { type: SET_LOCALE, payload };
}
