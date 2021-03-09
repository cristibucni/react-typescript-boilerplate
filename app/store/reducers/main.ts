import { SET_EXAMPLE, MainDispatch } from 'store/types';

interface MainState {
  ok: boolean;
}

const defaultState: MainState = {
  ok: false,
};

export default (state: MainState = defaultState, action: MainDispatch): MainState => {
  const { type, payload } = action;

  switch (type) {
    case SET_EXAMPLE:
      return { ...state, ok: payload };
    default:
      return state;
  }
};
