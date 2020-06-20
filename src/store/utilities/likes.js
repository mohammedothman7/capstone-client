import axios from "axios";

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

// export const addLikesThunk = (like) => (dispatch) => {
//   return axios
//     .post(`/api/likes/${newComment.gameId}`, newComment)
//     .then((res) => res.data)
//     .then((newComment) => {
//       dispatch(addComment(newComment));
//       console.log("~~~~~~~~~~~~" + newComment);
//       console.log("this is addcommentthunk" + newComment.user.username);
      
//       // ownProps.history.push(`/gamePage/${newComment.gameId}`)
//     })
//     .catch((err) => console.log(err));
// };

//Reducer
const reducer = (state = {} , action) => {
  switch (action.type) {
    case FETCH_LIKES:
      return action.payload;
    // case ADD_COMMENT:
    //   return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
