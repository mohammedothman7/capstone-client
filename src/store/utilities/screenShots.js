import axios from "axios";

const FETCH_SS = "FETCH_SS";

const fetchSS = (screenshot) => {
  return {
    type: FETCH_SS,
    payload: screenshot,
  };
};

export const fetchSSThunk = (id) => (dispatch) => {
  return axios
    .get(`https://api.rawg.io/api/games/${id}/screenshots`)
    .then((res) => res.data)
    .then((screenshot) => dispatch(fetchSS(screenshot)))
    .catch((err) => console.log(err));
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
