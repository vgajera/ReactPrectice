import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { alertActions } from "../_store";
import closeImg from "../assets/images/close-modal.svg";

export { Alert };

function Alert() {
  const dispatch = useDispatch();
  const location = useLocation();
  const alert = useSelector((x) => x.alert.value);

  useEffect(() => {
    // clear alert on location change
    dispatch(alertActions.clear());
  }, [location]);

  if (!alert) return null;

  return (
    <div className={`alert alert-dismissible ${alert.type}`}>
      {alert.message}
      <a className="btn-close" onClick={() => dispatch(alertActions.clear())}>
        <img src={closeImg} />
      </a>
    </div>
  );
}
