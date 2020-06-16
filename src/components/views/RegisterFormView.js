import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RegisterFormView = (props) => {
  return (
    <div className="container col-md-6 mt-5">
      <h2>Register</h2>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            name="firstName"
            value={props.firstName}
            className="form-control"
            onChange={props.handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            name="lastName"
            value={props.lastName}
            className="form-control"
            onChange={props.handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            name="username"
            value={props.username}
            className="form-control"
            onChange={props.handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={props.password}
            className="form-control"
            onChange={props.handleChange}
            required
          />
        </div>

        <div className="form-group d-flex justify-content-between">
          <button className="btn btn-outline-danger">Register</button>
          <Link to="/" className="btn btn-outline-danger">
            Back To Home
          </Link>
        </div>
      </form>
    </div>
  );
};

RegisterFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RegisterFormView;
