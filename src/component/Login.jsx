import React from "react";
import { Link } from "react-router-dom";
import "../asset/scss/login.scss";

const Login = () => {
  return (
    <section className="login-section">
      <div className="form-conatainer">
        <div className="form-title">
          <h1>Log In </h1>
        </div>
        <div className="form-block">
          <form>
            <div className="form-input">
              <input
                type="email"
                className="form-control"
                name="email"
                value=""
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="form-input">
              <input
                type="email"
                className="form-control"
                name="email"
                value=""
                placeholder="Enter Your Password"
                required
              />
            </div>
            <span className="forgot-pass">Forgot Password ?</span>
            <div className="btn-container">
              <button className="btn" type="submit">
                Log in
              </button>
            </div>
          </form>
        </div>
        <div className="btn-container">
          <Link to="/register">
            <button className="btn" type="submit">
              Create New Account
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
