import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RegisterFormView = (props) => {
  return (
    <div className="col-md-6 col-md-offset-3">
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

        <div className="form-group">
          <button className="btn btn-primary">Register</button>
          <Link to="/login" className="btn btn-link">
            Cancel
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
