import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AddUser from './Pages/AddUser/Container';
import UserList from './Pages/UserList/Container';

 
function UsersRoute() {
    return (
        <Routes>
            <Route index element={<UserList />} />
            <Route path="add" element={<AddUser />} />
            <Route path="edit/:id" element={<AddUser />} />
        </Routes>
    );
}

export default UsersRoute