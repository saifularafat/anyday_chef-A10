import React from 'react';
import Header from '../pages/Share/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Share/Footer';

const Main = () => {
    return (
        <div>
            <Header />
            <div className='bg-black min-h-[calc(100vh-140px)] pb-10'>
                < Outlet />
            </div>
            <Footer />

        </div>
    );
};

export default Main;