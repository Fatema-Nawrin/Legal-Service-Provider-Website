import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import { async } from '@firebase/util';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let from = location.state?.from?.pathname || "/";
    let errorDiv;
    if (error) {
        errorDiv = <div>
            <p className='text-danger'>Error:{error?.message}</p>
        </div>
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const resetPassword = async () => {
        const email = emailRef.current.value;
        console.log(email)
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email has been sent.');
        }
        else {
            toast('Enter your email address first.')
        }
    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='login-form'>
            <h2>Login Here</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" ref={emailRef} name='email' placeholder='Your Email' required />
                <input type="password" ref={passwordRef} name='password' placeholder='Password' required />
                <input className='submit-btn' type="submit" value="Login" />
                {errorDiv}
                <p>New to the website?
                    <Link className='text-decoration-none' to='/register'> Please Sign up First</Link>
                </p>
                <p>Forgot Password?
                    <button className='btn btn-link text-danger text-decoration-none' onClick={resetPassword}>Reset Password</button>
                </p>
            </form>
            <GoogleLogin></GoogleLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;