//main
export const SET_EXAMPLE = 'SET_EXAMPLE';

//language
export const SET_LOCALE = 'SET_LOCALE';

class Action {
  constructor(public payload?: any) {}
}

//MAIN.TS

export interface SetExample extends Action {
  type: string;
  payload: boolean;
}

export type MainDispatch = SetExample; // | other interfaces

//LANGUAGE.TS

export interface SetLocale extends Action {
  type: typeof SET_LOCALE;
  payload: string;
}

export type LocaleDispatch = SetLocale;