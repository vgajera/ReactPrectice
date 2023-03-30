import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";

import { history } from "../../../services";
import { userActions, alertActions } from "../../../_store";

function AddUser(props) {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const dispatch = useDispatch();
  const user = useSelector((x) => x.users?.item);

  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .transform((x) => (x === "" ? undefined : x))
      // password optional in edit mode
      .concat(id ? null : Yup.string().required("Password is required"))
      .min(6, "Password must be at least 6 characters"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  useEffect(() => {
    if (id) {
      setTitle("Edit User");
      // fetch user details into redux state and
      // populate form fields with reset()
      dispatch(userActions.getById(id))
        .unwrap()
        .then((user) => reset(user));
    } else {
      setTitle("Add User");
    }
  }, []);

  async function onSubmit(data) {
    dispatch(alertActions.clear());
    try {
      // create or update user based on id param
      let message;
      if (id) {
        await dispatch(userActions.update({ id, data })).unwrap();
        message = "User updated";
      } else {
        await dispatch(userActions.register(data)).unwrap();
        message = "User added";
      }

      // redirect to user list with success message
      history.navigate("/users");
      dispatch(alertActions.success({ message, showAfterRedirect: true }));
    } catch (error) {
      dispatch(alertActions.error(error));
    }
  }

  return (
    <div className="right-contentarea">
      <div className="main-head">
        <div className="container">
          <div className="header-top">
            <div className="profile-wrap">
              <h2>{title}</h2>
            </div>
          </div>
          <div className="header-bottom"></div>
        </div>
      </div>
      <div className="block-row">
        <div className="container">
          {!(user?.loading || user?.error) && (
            <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
              <div className="half-fitem fitem">
                <div className="fitem half-fitem">
                  <label>First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    {...register("firstName")}
                  />
                  <label className="error">{errors.firstName?.message}</label>
                </div>
                <div className="fitem half-fitem">
                  <label>Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    {...register("lastName")}
                  />
                  <label className="error">{errors.lastName?.message}</label>
                </div>
              </div>
              <div className="half-fitem fitem">
                <div className="fitem half-fitem">
                  <label>Username</label>
                  <input
                    name="username"
                    type="text"
                    {...register("username")}
                  />
                  <label className="error">{errors.username?.message}</label>
                </div>
                <div className="fitem half-fitem">
                  <label>
                    Password
                    {id && (
                      <em className="ml-1">
                        (Leave blank to keep the same password)
                      </em>
                    )}
                  </label>
                  <input
                    name="password"
                    type="password"
                    {...register("password")}
                  />
                  <label className="error">{errors.password?.message}</label>
                </div>
              </div>
              <div className="btn-group">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-brand"
                >
                  {isSubmitting && <span className="spinner-border "></span>}
                  Save
                </button>
                <button
                  onClick={() => reset()}
                  type="button"
                  disabled={isSubmitting}
                  className="btn btn-danger"
                >
                  Reset
                </button>
                <Link to="/users" className="btn btn-gray">
                  Cancel
                </Link>
              </div>
            </form>
          )}
          {user?.loading && (
            <div className="text-center m-5">
              <span className="spinner-border spinner-border-lg align-center"></span>
            </div>
          )}
          {user?.error && (
            <div class="text-center m-5">
              <div class="text-danger">Error loading user: {user.error}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddUser;
