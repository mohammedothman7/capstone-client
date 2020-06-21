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
    .get(`https://api.rawg.io/api/games/${id}`)
    .then((res) => res.data)
    .then((game) => {
      dispatch(fetchGame(game));
      console.log("this is fetchGameThunk --- game");
    })
    .catch((err) => console.log(err));
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
