import axios from "axios";

//Action Types
const FETCH_COMMENTS = "FETCH_COMMENTS";
const ADD_COMMENT = "ADD_COMMENT";

//Action Creators
const fetchComments = (comments) => {
  return {
    type: FETCH_COMMENTS,
    payload: comments,
  };
};

const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};

//Thunk Creators
export const fetchCommentsThunk = (gameId) => (dispatch) => {
  return axios
    .get(`/api/comments/${gameId}`)
    .then((res) => res.data)
    .then((comments) => dispatch(fetchComments(comments)))
    .catch((err) => console.log(err));
};

export const addCommentThunk = (newComment) => (dispatch) => {
  console.log("++++++++", newComment.user.username);
  return axios
    .post(`/api/comments/${newComment.gameId}`, newComment)
    .then((res) => res.data)
    .then((newComment) => {
      dispatch(addComment(newComment));
      console.log("~~~~~~~~~~~~" + newComment);
      console.log("this is addcommentthunk" + newComment.user.username);
      
      // ownProps.history.push(`/gamePage/${newComment.gameId}`)
    })
    .catch((err) => console.log(err));
};

//Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return action.payload;
    case ADD_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
