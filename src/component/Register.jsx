import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../asset/scss/login.scss";
import axiosInstance from "../helper/axios";
import { useForm } from "react-hook-form";
// import { reactLocalStorage } from "reactjs-localstorage";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
      .post("/register", {
        email: data.email,
        password: data.password,
      })
      .then(({ data }) => {
        // reactLocalStorage.set("token", data.token);
        // if (reactLocalStorage.get("token")) {
        //   navigate("dashboard");
        // } else {
        //   ;
        // }
        if (data.user) {
          navigate("/login");
        }
        console.log(data);
      })
      .catch((error) => {});
    // reset({
    //   email: "",
    //   password: "",
    // });
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
          <h1>Register </h1>
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
