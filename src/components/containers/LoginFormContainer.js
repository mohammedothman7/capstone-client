import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { LoginFormView } from "../views";
import { loginThunk } from "../../thunks";

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
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

export default connect(null, mapDispatch)(LoginFormContainer);
