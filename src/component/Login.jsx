import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../asset/scss/login.scss";
import axiosInstance from "../helper/axios";
import { useForm } from "react-hook-form";
import { reactLocalStorage } from "reactjs-localstorage";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessfull },
  } = useForm({
    validateCriteraMode: "all",
    mode: "onChange",
    defaultValues: { something: "anything" },
  });

  const onSubmit = (data) => {
    axiosInstance
      .post("/login", {
        email: data.email,
        password: data.password,
      })
      .then(({ data }) => {
        console.log(data);
        reactLocalStorage.set("token", data.accessToken);
        if (reactLocalStorage.get("token")) {
          navigate("/");
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        alert("incorrect email or password");
      });
  };

  useEffect(() => {
    if (isSubmitSuccessfull) {
      reset({
        email: "",
        password: "",
      });
    }
  }, [formState, reset, isSubmitSuccessfull]);

  return (
    <section className="login-section">
      <div className="form-conatainer">
        <div className="form-title">
          <h1>Log In </h1>
        </div>
        <div className="form-block">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter Your Email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                })}
              />
            </div>
            <div className="form-input">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter Your Password"
                required
                {...register("password", { required: true })}
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
