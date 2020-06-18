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
      console.log(tweakedUser);
      dispatch(registerUser(tweakedUser));
      ownProps.history.push(`/login`);
    })
    .catch((err) => console.log(err));
};

export const loginThunk = (username, password, ownProps) => (dispatch) => {
  return axios
    .get(`/api/users/${username}/${password}`)
    .then((res) => res.data)
    .then((user) => {
      const loggedUser = { ...user };
      if (Object.keys(loggedUser).length == 0) {
        console.log("FAIL");
      } else {
        console.log(loggedUser);
      }
    });
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
