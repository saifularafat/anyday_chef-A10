import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRouter = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    if (loader) {
        return (
            <div className='text-center py-24'>
                <span className="pl-3 text-3xl text-white ">
                    L<span className='text-red-600 text-5xl font-serif'>o</span>ading......
                </span>
            </div >
        )
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>;
};

export default PrivateRouter;