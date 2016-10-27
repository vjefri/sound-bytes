import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


export class App extends Component {

  render() {
    return (
      <div className="app" />
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
