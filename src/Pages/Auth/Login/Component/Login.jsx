import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { authActions } from "../../../../_store";
import { Link } from "react-router-dom";

function Login() {
  
  const dispatch = useDispatch();
  
    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors, isSubmitting } = formState;

    function onSubmit({ username, password }) {
        return dispatch(authActions.login({ username, password }));
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
              <h1 className="mb-0">Login </h1>
              <p>
                 login caption here
              </p>
            </div>
            <form action="" className="form-group" onSubmit={handleSubmit(onSubmit)}>
              <div className={"fitem"}>
                <label htmlFor="" className="required">
                  User Name
                </label>
                <input name="username" type="text" {...register('username')} className={`${errors.username ? 'is-invalid' : ''}`} />
                <label className="error">{errors.username?.message}</label>
              </div>
              <div className={"fitem"}>
                <label htmlFor="" className="required">
                  Password
                </label>
                <input name="password" type="password" {...register('password')} className={`${errors.password ? 'is-invalid' : ''}`} />
                <label className="error">{errors.password?.message}</label>
              </div>
              <div className="btn-group pt-20">
                <button
                  disabled={isSubmitting}
                  className="btn btn-brand btn-full"
                >
                  {isSubmitting && (
                    <span className="spinner-border spinner-border-sm mr-1"></span>
                  )}
                  Login
                </button>
                <p className="pt-20 clr-black text-center"><strong><Link to="/register" className="">Create Account</Link></strong></p>
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
