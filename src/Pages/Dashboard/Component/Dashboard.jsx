import React, { useContext } from "react";
import { useSelector} from "react-redux";
import Counter from "../../Component/Counter";
import ClassClick from "../../Component/ClassClick";
import DarkCard from "../../Component/DarkCard";
import StyleSheet from "../../Component/StyleSheet";
import Context from "../../Component/Context";
import Greet from "../../Component/Greet";
import { ThemeProvider } from "../../../common/ThemeContext";
//import { userActions } from "../../../_store";


function Dashbaord(props) {
  const auth = useSelector(x => x.auth.value);
  
  return (
    <div className="right-contentarea">
      <ThemeProvider >                    
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
                <ClassClick />
                <Counter />
                <Greet name={'world'} />
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
              <div className="card-row">  
                <div className="card">
                  <div className="card-title">
                      <h3>context api demo</h3>
                  </div>                
                  <div className="card-caption">
                      <Context /> 
                  </div>
                </div>
              </div> 
              <DarkCard />
          </div> 
        </div>
      </div> 
    </ThemeProvider>
    </div>
  );
}

export default Dashbaord