import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { history } from "../../../../services";
import { userActions, alertActions } from "../../../../_store";

function Register() {
  const dispatch = useDispatch();

  // form validation
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  async function onSubmit(data) {
    dispatch(alertActions.clear());
    try {
       console.log(data);
      await dispatch(userActions.register(data)).unwrap();

      // redirect to login page and display success alert
      history.navigate("/login");
      dispatch(
        alertActions.success({
          message: "Registration successful",
          showAfterRedirect: true,
        })
      );
    } catch (error) {
      console.log(data,'not fountd');
      dispatch(alertActions.error(error));
    }
  }
  return (
    <div className="auth-block">
      <div className="logo-aside">
        <div className="acard">
          <div className="caption">
            <p>
              Username: codal
              <br />
              Password: codal123
            </p>
          </div>
        </div>
      </div>
      <div className="right-caption">
        <div className="caption-area">
          <div className="container">
            <div className="title-row">
              <h1 className="mb-0">Create Account </h1>
              <p>Required fields are marked with *</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="form-group">
              <div className={`fitem ${errors.firstName ? "error" : ""}`}>
                <label className="required">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  {...register("firstName")}
                />
                <label className="error">{errors.firstName?.message}</label>
              </div>
              <div className={`fitem ${errors.lastName ? "error" : ""}`}>
                <label className="required">Last Name</label>
                <input name="lastName" type="text" {...register("lastName")} />
                <label className="error">{errors.lastName?.message}</label>
              </div>
              <div className={`fitem ${errors.username ? "error" : ""}`}>
                <label className="required">Username</label>
                <input name="username" type="text" {...register("username")} />
                <label className="error">{errors.username?.message}</label>
              </div>
              <div className={`fitem ${errors.password ? "error" : ""}`}>
                <label className="required">Password</label>
                <input
                  name="password"
                  type="password"
                  {...register("password")}
                />
                <label className="error">{errors.password?.message}</label>
              </div>
              <div className="btn-group pt-20">
                <button
                  disabled={isSubmitting}
                  className="btn btn-brand btn-full"
                >
                  {isSubmitting && (
                    <span className="spinner-border spinner-border-sm me-1"></span>
                  )}
                  Register
                </button>
                <p className="pt-20 clr-black text-center">
                  <strong>
                    <Link to="/login" className="">
                      Cancel
                    </Link>
                  </strong>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
