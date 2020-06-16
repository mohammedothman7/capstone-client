import axios from 'axios';

// Action Types
const FETCH_ALL_GAMES = 'FETCH_ALL_GAMES';

const fetchAllGames = (games) => {
  return {
    type: FETCH_ALL_GAMES,
    payload: games,
  };
};

export const fetchAllGamesThunk = () => (dispatch) => {
  return axios
    .get('/api/games')
    .then((res) => dispatch(fetchAllGames(res)))
    .catch((err) => console.log(err));
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_GAMES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
