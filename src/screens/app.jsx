import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from './shared/header';

export class App extends Component {

  render() {
    return (
      <Header />
    );
  }
}

App.PropTypes = {
  children: PropTypes.array,
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
