import axios from "axios";

//Action Types
const FETCH_GAME = "FETCH_GAME";
const CLEAR_GAME = "CLEAR_GAME";

//Action Creators
const fetchGame = (game) => {
  return {
    type: FETCH_GAME,
    payload: game,
  };
};

const clearGame = () => {
  return {
    type: CLEAR_GAME,
  };
};

//Thunk Creators
export const fetchGameThunk = (id) => (dispatch) => {
  return axios
    .get(`https://api.rawg.io/api/games/${id}`, {
      params: {
        key: process.env.RAWG_API_KEY,
      },
    })
    .then((res) => res.data)
    .then((game) => {
      dispatch(fetchGame(game));
    })
    .catch((err) => {
      console.error(err);
      alert("Game with that id does not exist!");
      return err;
    });
};

export const clearGameThunk = (dispatch) => {
  return dispatch(clearGame());
};

//Reducer
const initialState = {};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAME:
      return action.payload;
    case CLEAR_GAME:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
