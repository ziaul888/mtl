import React from "react";
import { Link } from "react-router-dom";
import "../asset/scss/login.scss";

const Register = () => {
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

            <div className="btn-container">
              <button className="btn" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="btn-container">
          <Link to="/login">
            <button className="btn" type="submit">
              Already have a Account
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
