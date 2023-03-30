import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../_store';

export { Nav };



function Nav() {
    const auth = useSelector(x => x.auth.value);
    const dispatch = useDispatch();
    const logout = () => dispatch(authActions.logout());
  
    if (!auth) return null;
    
    return (<>
        <div className="aside-nav">
        <div className="aside-header">
        <Link className="mainlogo" to={'#'}>
          <img src={'https://vercel.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F3zGtRFBAUTmamDBggXHKtC%2F5d166359029a6ce1c08640d34434a091%2Fcodal-logo-blue.png&w=640&q=75'} />
        </Link>

        <Link className="btn btn-grey" to={'#'} >
          <i className="icon icon-dubble-right">
            <img src={'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/angle-double-right-512.png'} />
          </i>
        </Link>
      </div>
      <nav className="aside-main-menu">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>            
            <li>
                <Link to="/about">About Us</Link>
            </li>            
            <li>
                <Link to="/users">User List</Link>
            </li>
            {/* <li>
                <Link to="/Product">Products</Link>
            </li> */}
        </ul>
      </nav>
      <div className="aside-footer">
        <ul className="">
          {/* <li>
            <Link to="/profile">
              <i className="icon icon-settings-fill"></i>
              <span>Profile </span>
            </Link>
          </li> */}
          <li>
            <Link to="#" onClick={logout}>
              <i className="icon icon-logout"></i>
              <span>Log Out</span>
            </Link>
          </li>
        </ul>
      </div>
      </div>
      </>
    );
}