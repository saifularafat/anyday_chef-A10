import React from 'react';
import Header from '../pages/Share/Header';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default LoginLayout;