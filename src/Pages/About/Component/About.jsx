import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";

import { userActions } from "../../../_store";

function About(props) {
  const dispatch = useDispatch();
  const [codeOFCunductdata, setCodeOFCunductsetdata] = useState("")  
  const auth = useSelector(x => x.auth.value);
  const { users } = useSelector((x) => x.users);

  useEffect(() => {
      axios({
          url: '/static-code/about.txt',
      })
      .then(response => {
          setCodeOFCunductsetdata(response.data)
      })
  
  }, [])

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
          <div dangerouslySetInnerHTML={{ __html: codeOFCunductdata }}></div>
        </div>
      </div> 
    </div>
    )
}

export default About 