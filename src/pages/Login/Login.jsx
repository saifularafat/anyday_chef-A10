import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FaGoogle, FaGithub, FaSpinner } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    const [showPassword, setShowPassword] = useState(false);
    // Auth Provider component destructuring
    const { user, loader, setUser, login, googleandgithub, logOut } = useContext(AuthContext)

    if (loader) {
        return (
        <div className='text-center py-24'> 
            <span className="pl-3 text-3xl text-white ">
                L<span className='text-red-600 text-5xl font-serif'>o</span>ading......
            </span>
        </div >
        )
    }

// login from information and handler
const handlerLogin = event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
        .then(result => {
            const logged = result.user;
            toast.success('Wow! login successful!')
            navigate(from, { replace: true });
        })
        .catch(error => {
            console.log(error);
            toast.error('Oop! password Wrong')
        })

}

const handlerLogOut = () => {
    logOut()
}

// google login handler
const handlerGoogle = () => {
    googleandgithub(googleProvider)
        .then(result => {
            const googleLogged = result.user;
            console.log('google', googleLogged);
            setUser(googleLogged)
        })
        .catch(error => {
            console.log(error);
        })
}
// github login handler
const handlerGithub = () => {
    googleandgithub(githubProvider)
        .then(result => {
            const gitLogged = result.user;
            setUser(gitLogged)
        })
        .catch(error => {
            console.log(error);
        })
}


return (
    <div className="hero min-h-screen">
        <form
            onSubmit={handlerLogin}
            className="hero-content flex-col">
            <div className="text-center my-5">
                <h1 className="md:text-5xl font-bold">Please Login..!</h1>
            </div>
            <div className="card flex-shrink-0 md:w-[960px] max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Email
                            </span>
                        </label>
                        <input
                            type="email"
                            name='email'
                            placeholder="your email" className="input input-bordered" />
                    </div>
                    <div
                        className="form-control">
                        <label
                            className="label">
                            <span className="label-text">
                                Password
                            </span>
                        </label>
                        <input
                            type={showPassword ? 'text'
                                : "password"}
                            name='password' placeholder="password" className="input input-bordered" />
                        <label
                            className="label">
                            <p onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ?
                                        <span>
                                            Hide password
                                        </span> : <span>
                                            Show Password
                                        </span>
                                }
                            </p>
                        </label>
                    </div>
                    <div
                        className="form-control mt-6">
                        {
                            user ?
                                <button
                                    onClick={handlerLogOut}
                                    className="btn btn-success">
                                    LogOut
                                </button>
                                : <button
                                    className="btn btn-success">
                                    Login
                                </button>

                        }

                    </div>
                    <div
                        className='inline-flex items-center py-4'>
                        <span>
                            Dont’t Have An Account ?
                        </span> <Link to='/register' className="btn-link pl-2 hover:opacity-80">
                            register
                        </Link>
                    </div>
                    <div
                        className=''>
                        <button
                            onClick={handlerGoogle}
                            className="social flex justify-center items-center">
                            <FaGoogle />
                            <span
                                className='ml-3'
                            > Google
                            </span>
                        </button>
                        <br />
                        <button
                            onClick={handlerGithub}
                            className="social flex justify-center items-center">
                            <FaGithub />
                            <span
                                className='ml-3'
                            > Github
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
);
};

export default Login;