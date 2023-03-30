import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { userActions } from "../../../_store";

function UserList(props) {
  const users = useSelector(x => x.users.list);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(userActions.getAll());
  }, []);

 

  return (
    <div className="right-contentarea">
      <div className="main-head">
        <div className="container">
          <div className="header-top">
            <div className="profile-wrap">
              <h2> Users List
              </h2>
            </div>
          </div>
          <div className="header-bottom"></div>
        </div>
      </div>
      <div className="block-row">
        <div className="container">   
        <div className="title-row">
          <Link to="add"  className="btn btn-brand">Add User</Link>
          </div>     
          <table className="table ">
              <thead>
                  <tr>
                      <th style={{ width: '30%' }}>First Name</th>
                      <th style={{ width: '30%' }}>Last Name</th>
                      <th style={{ width: '30%' }}>Username</th>
                      <th style={{ width: '10%' }}></th>
                  </tr>
              </thead>
              <tbody>
                  {users?.value?.map(user =>
                      <tr key={user.id}>
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>
                          <td>{user.username}</td>
                          <td style={{ whiteSpace: 'nowrap' }}>
                              <Link to={`edit/${user.id}`} className="btn btn-success">Edit</Link>
                              <button onClick={() => dispatch(userActions.delete(user.id))} className="btn btn-danger" disabled={user.isDeleting}>
                                  {user.isDeleting 
                                      ? <span className="spinner-border spinner-border-sm"></span>
                                      : <span>Delete</span>
                                  }
                              </button>
                          </td>
                      </tr>
                  )}
                  {users?.loading &&
                      <tr>
                          <td colSpan="4" className="text-center">
                              <span className="spinner-border spinner-border-lg align-center"></span>
                          </td>
                      </tr>
                  }
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserList;
