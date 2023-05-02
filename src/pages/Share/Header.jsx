import React from 'react';
import Navber from './Navber/Navber';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:w-full px-8 bg-header_bg md:flex justify-between items-center sticky top-0 z-10 shadow-md'>
            <div className='flex'>
                <Link to='/'>
                    <img
                        src="../../../../../public/logo/dinery_logo.png"
                        alt=""
                        className='h-20' />
                </Link>
                <p className='pl-2 mt-1 text-white'>@Italian Food</p>
            </div>
            <Navber />
        </div>
    );
};

export default Header;