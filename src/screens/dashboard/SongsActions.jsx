import * as CONSTANT from './DashboardConstants';

const url = 'https://api.soundcloud.com/tracks?';

function songRequest() {
  return {
    type: CONSTANT.GET_SONGS_REQUEST,
  };
}

function songSuccess(songs) {
  return {
    type: CONSTANT.GET_SONGS_SUCCESS,
    Songs: songs.data,
    error: null,
  };
}

function songFailure(err) {
  return {
    type: CONSTANT.GET_SONGS_FAILURE,
    error: err,
  };
}

export default function getSongs() {
  return (dispatch) => {
    dispatch(songRequest());
    return axios.get(`${url}/Songs`)
      .then(response => dispatch(songSuccess(response)))
      .catch(err => dispatch(songFailure(err)));
  };
}
