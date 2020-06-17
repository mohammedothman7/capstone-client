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
  };

  render() {
    return (
      <LoginFormView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

// const mapDispatchToProps = () => {};
// export default connect(null, mapDispatch)(LoginFormContainer);

export default LoginFormContainer;
