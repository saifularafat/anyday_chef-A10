import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { handler } from 'daisyui';
import { AuthContext } from '../../Provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';



const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Register = () => {
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const [showPassword, setShowPassword] = useState(false);

    // Auth Provider component destructuring
    const { setUser, createUser, googleandgithub } = useContext(AuthContext);



    // Register from information and handler
    const handlerRegister = event => {
        event.preventDefault();
        const from = event.target
        const name = from.name.value;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, photo, email, password);

        setError('');
        setSuccess('');

        // * validation password
        if (!/(?=.*?[A-Z])/.test(password)) {
            setError('please add at least one Capital letter!')
            return;
        }
        else if (!/(?=.*?[0-9])/.test(password)) {
            setError('please add by two number.!')
            return;
        }
        else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setError('please at least one special symbol.!')
            return;
        }
        else if (password.length < 6) {
            setError('please your password by 6 Characters.!')
            return;
        }

        createUser(email, password)
            .then(result => {
                const create = result.user;
                console.log(create);
                setSuccess('your registration successfully..!')
                from.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }

    // google login handler
    const handlerGoogle = () => {
        googleandgithub(googleProvider)
            .then(result => {
                const googleLogged = result.user;
                setSuccess('your registration successfully..!')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }
    // github login handler
    const handlerGithub = () => {
        googleandgithub(githubProvider)
            .then(result => {
                const gitLogged = result.user;
                setSuccess('your registration successfully..!')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)

            })
    }

    return (
        <div
            className="hero min-h-screen bg-second_bg">
            <form onSubmit={handlerRegister}
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
                                aria-required
                                className="label">
                                <span
                                    className="label-text">
                                    Name
                                </span>
                            </label>
                            <input
                                type="text"
                                name='name'
                                required
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
                                required
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
                                required
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
                                type={showPassword ? 'text' : "password"}
                                name='password'
                                required
                                placeholder="password"
                                className="input input-bordered" />
                            <p
                                className='py-2'
                                onClick={() =>
                                    setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <span>Hide Password</span>
                                        : <span>Show Password</span>
                                }
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <input
                                type="checkbox"
                                name='accept'
                                required
                            // onClick={handlerAccepted}
                            />
                            <p className='pl-5'>Accept
                                <Link to='/terms' className='text-blue-500 underline pl-1'>Terms and Condition
                                </Link>
                            </p>
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
                                onClick={handlerGoogle}
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
                                onClick={handlerGithub}
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