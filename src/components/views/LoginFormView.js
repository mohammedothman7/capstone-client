import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LoginFormView = (props) => {
  return (
    <div className="col-md-6 col-md-offset-3">
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

        <div className="form-group">
          <button className="btn btn-primary">Login</button>
          <Link to="/register" className="btn btn-link">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

LoginFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LoginFormView;
