const GET_SONGS_REQUEST = 'GET_SONGS_REQUEST';

const INITIAL_STATE = {
  users: [],
  currentUser: {},
  isFetching: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SONGS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    default:
      return state;
  }
};
