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
      dispatch(registerUser(tweakedUser));
      ownProps.history.push(`/login`);
    })
    .catch((err) => console.log(err));
};

export const loginThunk = (username, password) => (dispatch) => {
  return axios
    .get(`/api/users/${username}/${password}`)
    .then((res) => res.data)
    .then((user) => {
      const tweakedUser = { ...user };
      dispatch(login(tweakedUser));
    })
    .catch((err) => console.log(err));
  /*
    if (res.status !== 404) {
      alert("Login success!");
    } else {
      alert("Username or password is incorrect.");
    }
*/
};

// REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case REGISTER_USER:
      return [...state, action.payload];
    case LOGIN:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
