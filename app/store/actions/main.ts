import { SET_EXAMPLE, MainDispatch } from 'store/types';
import { Dispatch } from 'redux';

export const setExample = (payload: boolean) => {
  return { type: SET_EXAMPLE, payload };
};

export const fetchExample = () => async (dispatch: Dispatch<MainDispatch>) => {
  try {
    dispatch(setExample(false));
    //API CALLS
    //const res = axios.get
  } catch (e) {
    //dispatch error handler
  }
};
