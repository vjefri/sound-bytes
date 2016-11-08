import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import 'bulma';
import 'axios';

import { AppRoot } from './AppRoot';
import storeConfig from './store';
import '../styles/main.scss';

const store = storeConfig();

const renderApp = (App) => {
  render(
    <AppContainer>
      <App store={store} history={browserHistory} />
    </AppContainer>,
    document.getElementById('root')
    );
};

if (module.hot) {
  module.hot.accept('./AppRoot', () => {
    const nextAppRoot = require('./AppRoot').AppRoot;
    renderApp(nextAppRoot);
  });
}

renderApp(AppRoot);
