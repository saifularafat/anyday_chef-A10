import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <nav className=''>
                <Link to='/' className='navBer'>Home</Link>
                <Link to='blog' className='navBer'>Blog</Link>
                <Link to='service' className='navBer'>Service</Link>
                <Link to='contact' className='navBer'>Contact</Link>
                <Link to='login' className='loginStyle'>Login</Link>
            </nav>
    );
};

export default Navber;