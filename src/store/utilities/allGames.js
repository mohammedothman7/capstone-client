import axios from "axios";

// Action Types
const FETCH_ALL_GAMES = "FETCH_ALL_GAMES";
const FETCH_SEARCHED_GANES = "FETCH_SEARCHED_GANES";

// Action Creators
const fetchAllGames = (games) => {
  return {
    type: FETCH_ALL_GAMES,
    payload: games,
  };
};

const fetchSearchedGames = (games) => {
  return {
    type: FETCH_SEARCHED_GANES,
    payload: games,
  };
};

// Thunk Creators
export const fetchAllGamesThunk = (filter) => (dispatch) => {
  //console.log({ filter });
  return axios
    .get("/api/games", {
      params: {
        // Send params to backend to fetch from API
        ...filter,
      },
    })
    .then((res) => dispatch(fetchAllGames(res.data)))
    .catch((err) => console.log(err));
};

export const fetchSearchedGamesThunk = (search) => (dispatch) => {
  return axios
    .get("/api/games/search", {
      params: {
        search,
      },
    })
    .then((res) => dispatch(fetchSearchedGames(res.data)))
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_GAMES:
      return action.payload;
    case FETCH_SEARCHED_GANES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
