import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import mainTheme from 'containers/Themes/main';
import history from 'utils/history';
import store from './store';

import App from './app';
import { LanguageProvider } from 'i18n';

ReactDOM.render(
  <Provider store={store}>
    <LanguageProvider>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={mainTheme}>
          <App />
        </ThemeProvider>
      </ConnectedRouter>
    </LanguageProvider>
  </Provider>,
  document.getElementById('root'),
);
