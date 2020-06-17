import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LoginFormView = (props) => {
  return (
    <div className="container col-md-6 mt-5">
      <h2>Login</h2>
      <form onSubmit={props.handleSubmit}>
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
          <button className="btn btn-outline-danger">Login</button>
          <Link to="/" className="btn btn-outline-danger">
            Back To Home
          </Link>
        </div>
      </form>
    </div>
  );
};

LoginFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  username: PropTypes.func.isRequired,
  password: PropTypes.func.isRequired,
};

export default LoginFormView;
