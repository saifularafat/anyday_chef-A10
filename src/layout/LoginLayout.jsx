import React from 'react';
import Header from '../pages/Share/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const LoginLayout = () => {
    return (
        <div className='bg-second_bg'>
            <Header />
            <Outlet />
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default LoginLayout;