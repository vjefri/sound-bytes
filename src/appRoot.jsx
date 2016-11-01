import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import { App } from './screens/app';

export const AppRoot = props => (
  <Provider store={props.store}>
    <Router history={props.history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

AppRoot.propTypes = {
  store: PropTypes.shape({}),
  history: PropTypes.shape({}),
};
