import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import history from '../utils/history';
import main from 'store/reducers/main';
import language from 'store/reducers/language';
import { composeWithDevTools } from 'redux-devtools-extension';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const middleware = [routerMiddleware(history), thunk];

const rootReducer = combineReducers({
  main,
  language,
  router: connectRouter(history),
});

export type RootState = ReturnType<typeof rootReducer>;

const composeEnhancers = process.env.NODE_ENV !== 'production' ? composeWithDevTools({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

const store = createStore(rootReducer, {}, enhancer);

export default store;
