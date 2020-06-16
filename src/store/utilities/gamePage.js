import axios from "axios";

//Action Types
const FETCH_GAME = "FETCH_GAME";

//Action Creators
const fetchGame = (game) => {
  return {
    type: FETCH_GAME,
    payload: game,
  };
};

//Thunk Creators
export const fetchGameThunk = (id) => (dispatch) => {
  return axios
    .get(`https://api.rawg.io/api/games/${id}`)
    .then((res) => res.data)
    .then((game) => dispatch(fetchGame(game)))
    .catch((err) => console.log(err));
};

//Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_GAME:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;