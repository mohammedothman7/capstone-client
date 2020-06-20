import axios from "axios";

const REGISTER_USER = "REGISTER_USER";
const LOGIN = "LOGIN";

// ACTION CREATORS;

const registerUser = (user) => {
  return {
    type: REGISTER_USER,
    payload: user,
  };
};

const login = (user) => {
  return {
    type: LOGIN,
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
      if (Object.keys(loggedUser).length === 0) {
        console.log("FAIL");
      } else {
        console.log(loggedUser);
        dispatch(login(loggedUser));
        ownProps.history.push(`/`);
      }
    });
};

// REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case REGISTER_USER:
      return [...state, action.payload];
    case LOGIN:
      console.log("login payload", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
