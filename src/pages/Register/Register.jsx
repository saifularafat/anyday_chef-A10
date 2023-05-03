import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Register = () => {
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    return (
        <div
            className="hero min-h-screen bg-second_bg">
            <form
                className="hero-content flex-col">
                <div
                    className="text-center my-7">
                    <h1
                        className="text-5xl font-bold">
                        Please Register..!
                    </h1>
                </div>
                <div
                    className="card flex-shrink-0 md:w-[1024px] 
                            max-w-sm shadow-2xl bg-base-100">
                    <div
                        className="card-body">
                        <div
                            className="form-control">
                            <label
                                className="label">
                                <span
                                    className="label-text">
                                    Name
                                </span>
                            </label>
                            <input
                                type="text"
                                name='name'
                                placeholder="your name"
                                className="input input-bordered" />
                        </div>
                        <div
                            className="form-control">
                            <label
                                className="label">
                                <span
                                    className="label-text">
                                    Photo url
                                </span>
                            </label>
                            <input
                                type="photo"
                                name='photo'
                                placeholder="your photo"
                                className="input input-bordered" />
                        </div>
                        <div
                            className="form-control">
                            <label
                                className="label">
                                <span
                                    className="label-text">
                                    Email
                                </span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="your email"
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text">
                                    Password
                                </span>
                            </label>
                            <input
                                type="password"
                                name='password'
                                placeholder="password"
                                className="input input-bordered" />
                            <label
                                className="label">
                                <span>Show Password</span>
                            </label>
                        </div>
                        <div
                            className="form-control mt-6">
                            <button
                                className="btn btn-success">
                                Register
                            </button>
                        </div>
                        <div
                            className='inline-flex items-center my-2'>
                            <span>Already have an account?
                            </span>
                            <Link
                                to='/login'
                                className="btn-link pl-2 hover:opacity-75">
                                Login Now.!
                            </Link>
                        </div>
                        <div className='mt-2'>
                            <button
                                className="social flex justify-center 
                                items-center">
                                <FaGoogle />
                                <span
                                    className='ml-3'
                                > Google
                                </span>
                            </button>
                            <br />
                            <button
                                className="social flex justify-center 
                                items-center">
                                <FaGithub />
                                <span
                                    className='ml-3'
                                > Github
                                </span>
                            </button>
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