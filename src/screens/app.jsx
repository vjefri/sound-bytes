import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from './shared/Header';
import SongsContainer from './dashboard/SongsContainer';

export class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <SongsContainer />
      </div>
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
