import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { RegisterFormView } from "../views";
import { registerThunk } from "../../thunks";

class RegisterFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
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
      <RegisterFormView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

// const mapDispatchToProps = () => {};
// export default connect(null, mapDispatch)(RegisterFormContainer);

export default RegisterFormContainer;
