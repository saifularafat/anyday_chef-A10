import React from 'react';
import Header from '../pages/Share/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Share/Footer';
import { Toaster } from 'react-hot-toast';

const HomeLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <Toaster />
        </div>
    );
};

export default HomeLayout;