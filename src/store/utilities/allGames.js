import axios from "axios";

// Action Types
const FETCH_ALL_GAMES = "FETCH_ALL_GAMES";
const FETCH_GENRE_GAMES = "FETCH_GENRE_GAMES";

// Action Creators
const fetchAllGames = (games) => {
  return {
    type: FETCH_ALL_GAMES,
    payload: games,
  };
};

const fetchGenreGames = (genres) => {
  return {
    type: FETCH_GENRE_GAMES,
    payload: genres,
  };
};

// Thunk Creators
export const fetchAllGamesThunk = (filter) => (dispatch) => {
  //console.log({ filter });
  return axios
    .get("https://gamecord-backend.herokuapp.com/api/games", {
      params: {
        // Send params to backend to fetch from API
        ...filter,
      },
    })
    .then((res) => dispatch(fetchAllGames(res.data)))
    .catch((err) => console.log(err));
};

export const fetchGenreGamesThunk = (genres) => (dispatch) => {
  return axios
    .get("https://gamecord-backend.herokuapp.com/api/games/genres", {
      params: {
        genres,
      },
    })
    .then((res) => dispatch(fetchGenreGames(res.data)))
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_GAMES:
      return action.payload;
    case FETCH_GENRE_GAMES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
