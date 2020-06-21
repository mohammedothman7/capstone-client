import axios from "axios";
import { act } from "react-dom/test-utils";

//Action Types
const ADD_LIKE = "ADD_LIKE";
const FETCH_LIKES = "FETCH_LIKES";

//Action Creators
const fetchLikes = (likes) => {
  return {
    type: FETCH_LIKES,
    payload: likes,
  };
};

const addLike = (like) => {
  return {
    type: ADD_LIKE,
    payload: like,
  };
};

//Thunk Creators
export const fetchLikesThunk = (gameId) => (dispatch) => {
  return axios
    .get(`/api/likes/${gameId}`)
    .then((res) => res.data)
    .then((likes) => dispatch(fetchLikes(likes)))
    .catch((err) => console.log(err));
};

export const addLikeThunk = (like) => (dispatch) => {
    console.log("()()()()()()()()()()()" + like.count);
  return axios
    .post(`/api/likes/${like.gameId}`, like)
    .then((res) => res.data)
    .then((newLike) => {
      dispatch(addLike(newLike));
      console.log("~~~~~~~~~~~~" + newLike.count);
      console.log("this is addcommentthunk" + newLike.gameId);
    })
    .catch((err) => console.log(err));
};

//Reducer
const reducer = (state = {} , action) => {
  switch (action.type) {
    case FETCH_LIKES:
      return action.payload;
    case ADD_LIKE:
     return {...state, rows:action.payload}
    default:
      return state;
  }
};

export default reducer;
