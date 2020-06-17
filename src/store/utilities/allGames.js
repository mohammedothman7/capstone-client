import axios from "axios";

// Action Types
const FETCH_ALL_GAMES = "FETCH_ALL_GAMES";

// Action Creators
const fetchAllGames = (games) => {
  return {
    type: FETCH_ALL_GAMES,
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
    .then((res) => dispatch(fetchAllGames(res)))
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_GAMES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
