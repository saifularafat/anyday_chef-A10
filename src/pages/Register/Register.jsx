import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <form
                className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Please Register..!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success">Register</button>
                        </div>
                        <div className='inline-flex items-center'>
                            <span>Already have an account? </span><Link to='/login' className="btn btn-link"> Login Now.!</Link>
                        </div>
                        <p className='text-red-700'>{error}</p>
                        <p className='text-green-500'>{success}</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;