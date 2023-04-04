import React, { useEffect } from "react";
import { useSelector} from "react-redux";
import Counter from "../../Component/Counter";
import ClassClick from "../../Component/ClassClick";
import ChildComponent from "../../Component/ChildComponent";
import StyleSheet from "../../Component/StyleSheet";
import Greet from "../../Component/Greet";
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
            <div className="title-row">
              <h1>Welcome to dashbaord page 
                <span>Here is the some basic prectice examples</span>
              </h1>
            </div>
            <div className="card-row">
            <div className="card">
                <div className="card-title">
                    <h3>click event </h3>
                </div>
                <div className="card-caption">
                  <ClassClick />
                </div>
              </div>
              <div className="card">
                <div className="card-title">
                    <h3>Increment value on click</h3>
                </div>
                <div className="card-caption">
                <Counter />
                </div>
              </div>              
              <div className="card">
                <div className="card-title">
                    <h3>Props example</h3>
                </div>
                <div className="card-caption">
                {/* <ChildComponent greetHendler={true} /> */}
                  <Greet name={'world'} />
                </div>
              </div>
            </div> 
            <div className="card-row">  
              <div className="card">
                <div className="card-title">
                    <h3>Stylesheet demo</h3>
                </div>
                <div className="card-caption">
                  <StyleSheet primary={true} />                
                </div>
              </div>
            </div> 
          </div> 
        </div>
      </div> 
    </div>
  );
}

export default Dashbaord