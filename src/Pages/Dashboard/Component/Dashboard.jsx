import React, { useEffect } from "react";
import { useSelector} from "react-redux";
//import { userActions } from "../../../_store";

function Dashbaord(props) {
  const auth = useSelector(x => x.auth.value);

  return (
    <div className="right-contentarea">
      <div className="main-head">
        <div className="container">
          <div className="header-top">
            <div className="profile-wrap">
              <h2>
                Welcome,
                <strong> {auth?.firstName}</strong>
              </h2>
            </div>
          </div>
          <div className="header-bottom"></div>
        </div>
      </div>
      <div className="block-row">
        <div className="container">
          <div className="page-heading">
            <h1>this is dashbaord page </h1>
            
                 
          </div> 
        </div>
      </div> 
    </div>
  );
}

export default Dashbaord