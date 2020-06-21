import axios from "axios";

const FETCH_SEARCHED_GAMES = "FETCH_SEARCHED_GAMES";

const fetchSearchedGames = (games) => {
  return {
    type: FETCH_SEARCHED_GAMES,
    payload: games,
  };
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

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SEARCHED_GAMES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
