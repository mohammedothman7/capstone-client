import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { RegisterFormView } from "../views";
import { registerUserThunk } from "../../thunks";

class RegisterFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
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
    this.props.registerUser(this.state);
  };

  render() {
    return (
      <RegisterFormView
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
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
    registerUser: (user) => dispatch(registerUserThunk(user, ownProps)),
  };
};

RegisterFormContainer.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(RegisterFormContainer);

//export default RegisterFormContainer;
