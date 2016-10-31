import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


export class App extends Component {

  render() {
    return (
      <div className="columns">
        <div className="column is-three-quarters">
          <p className="notification is-info">
            <code className="html">is-three-quarters</code>
          </p>
        </div>
        <div className="column">
          <p className="notification is-warning">Auto</p>
        </div>
        <div className="column">
          <p className="notification is-danger">Auto</p>
        </div>
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
