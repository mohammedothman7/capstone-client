import axios from "axios";

const REGISTER_USER = "REGISTER_USER";

// ACTION CREATORS;

const registerUser = (user) => {
  return {
    type: REGISTER_USER,
    payload: user,
  };
};

export const registerUserThunk = (user, ownProps) => (dispatch) => {
  return axios
    .post("/api/users", user)
    .then((res) => res.data)
    .then((newUser) => {
      const tweakedUser = { ...newUser };
      dispatch(registerUser(tweakedUser));
      ownProps.history.push(`/users/${newUser.id}`);
    })
    .catch((err) => console.log(err));
};

// REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case REGISTER_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
