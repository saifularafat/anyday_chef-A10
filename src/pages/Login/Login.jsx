import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    return (
        <div className="hero min-h-screen">
            <form
                className="hero-content flex-col">
                <div className="text-center my-5">
                    <h1 className="md:text-5xl font-bold">Please Login..!</h1>
                </div>
                <div className="card flex-shrink-0 w-[960px] max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
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
                            <button className="btn btn-success">Login</button>
                        </div>
                        <div className='inline-flex items-center'>
                            <span>New to auth Master? </span>
                            <Link to='/register' className="btn btn-link"> Register
                            </Link>
                        </div>
                        <div className=''>
                            <button className="social flex justify-center items-center">
                                <FaGoogle />
                                <span
                                    className='ml-3'
                                > Google
                                </span>
                            </button>
                            <br />
                            <button className="social flex justify-center items-center">
                                <FaGithub />
                                <span
                                    className='ml-3'
                                > Github
                                </span>
                            </button>
                        </div>
                        <p className='text-red-800'>{error}</p>
                        <p className='text-green-500'>{success}</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;