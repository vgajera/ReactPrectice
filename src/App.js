import React from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { history } from './services';
import { Nav,  Alert, PrivateRoute } from './common';

import Dashboard from './Pages/Dashboard/Container';
import About from './Pages/About/Container';
import Product from './Pages/Product/Container';
import Login from './Pages/Auth/Login/Container';
import Register from './Pages/Auth/Register/Container'; 
import UsersRoute from './UsersRoute.js'; 

export { App };

function App() {
    
    history.navigate = useNavigate();
    history.location = useLocation();

    return (
        <div className="wrapper aside-area">
            <Nav />
            <Alert />
            <Routes >
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/about" element={ <About />} />
                    <Route path="/product" element={ <Product />} />
                    <Route path="users/*" element={<UsersRoute />} />
                </Route>
                
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}
