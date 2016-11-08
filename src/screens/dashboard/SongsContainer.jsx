import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSong } from './SongsActions';

class SongContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSong());
  }

  render() {
    return <div />;
  }
}

function mapStateToProps(state) {
  return {
    songs: state.songs,
  };
}


export default connect(mapStateToProps)(SongContainer);
