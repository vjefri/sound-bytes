import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import 'bulma';
import { AppRoot } from './appRoot';

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
  module.hot.accept('./appRoot', () => {
    const nextAppRoot = require('./appRoot').AppRoot;
    renderApp(nextAppRoot);
  });
}

renderApp(AppRoot);
