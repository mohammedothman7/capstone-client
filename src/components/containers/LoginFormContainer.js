import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { LoginFormView } from "../views";
import { loginThunk } from "../../thunks";
import NavBarContainer from "./NavBarContainer";

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      user: "",
      isLoggedIn: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
    const user = this.props.user;
    this.setState({
      user,
      isLoggedIn: true,
    });
    console.log(this.state.isLoggedIn);
    if (this.state.isLoggedIn === true) {
    }
  };

  render() {
    return (
      <LoginFormView
        username={this.state.username}
        password={this.state.password}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapState = (state) => {
  console.log(state);
  const user = state.allUsers;
  console.log(user);
  return {
    user: user,
  };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    login: (username, password) => {
      dispatch(loginThunk(username, password, ownProps));
    },
  };
};

LoginFormContainer.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(LoginFormContainer);
