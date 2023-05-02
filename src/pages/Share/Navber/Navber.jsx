import React, { useState } from 'react';
import logo from '../../../../public/logo/dinery_logo.png'
import { Link, NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navber = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='sticky top-0 z-10'>
            <div className='flex justify-between items-center bg-second_bg shadow-xl py-5 px-6'>
                {/* logo section */}
                <Link to='/'>
                    <div className='relative flex items-center'>
                        <img
                            src={logo}
                            alt=""
                            className='h-16'
                        />
                    </div>
                </Link>
                {/* nav items section activities */}
                <ul className=' md:flex items-center hidden space-x-8'>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='blog'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}>
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='service'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}>
                            Service
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='contact'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='login'
                            className={({ isActive }) => (isActive ? 'active' : 'default  bg-btn_color py-2 px-6')}>
                            Login
                        </NavLink>
                    </li>
                </ul>

                {/* mobile bar section */}
                <div className='md:hidden'>
                    {/* bars Buttons added */}
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3BottomRightIcon className="h-9 w-9 text-logo" />
                    </button>
                    {
                        isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full z-10'>
                                <div className='flex justify-between items-center px-2 bg-second_bg shadow-2xl border'>
                                    {/* page title section */}
                                    <div>
                                        <Link to='/'>
                                            <div className=' inline-flex items-center'>
                                                <img src={logo} alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                    {/* dropdown menu and close button */}
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close MEnu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <XMarkIcon className="w-9" />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile nav section */}
                                <div>
                                    <nav>
                                        <ul className='space-y-4 bg-second_bg h-full'>
                                            <li className='px-3 hover:bg-slate-200'>
                                                <Link to='/' className='default'>
                                                    Home
                                                </Link>
                                            </li>
                                            <li className='px-3 hover:bg-slate-200'>
                                                <Link to='blog' className='default'>
                                                    Blog
                                                </Link>
                                            </li>
                                            <li className='px-3 hover:bg-slate-200'>
                                                <Link to='service' className='default'>
                                                    Service
                                                </Link>
                                            </li>
                                            <li className='px-3 hover:bg-slate-200'>
                                                <Link to='contact' className='default'>
                                                    contact
                                                </Link>
                                            </li>
                                            <li className='px-3 mb-3 hover:bg-slate-200'>
                                                <Link to='login' className='default'>
                                                    Login
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;
