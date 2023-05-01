import React from 'react';
import Header from '../pages/Share/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Share/Footer';

const Main = () => {
    return (
        <div>
            <Header />
            < Outlet />
            <Footer />

        </div>
    );
};

export default Main;