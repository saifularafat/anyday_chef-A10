import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-7/12 mx-auto mt-5'>
            <img src="../../../public/error.png" alt="" />
            <div className='text-center'>
                <Link to='/'>
                    <button
                        className='border-2 text-2xl
                                font-medium border-blue-500 
                                rounded-lg py-2 px-6 my-5 
                                transition duration-200
                                hover:bg-blue-100'
                    >
                        Go Back
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Error;