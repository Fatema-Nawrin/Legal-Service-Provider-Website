import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        verification();
        navigate('/home');
    }
    const verification = async () => {
        await sendEmailVerification();
    }
    return (
        <div className='register-form'>
            <h2 className='text-uppercase'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input className='register-btn' type="submit" value="Sign Up" />
                <p>Already have an account? <Link className='text-decoration-none' to='/login'>Please Login</Link>
                </p>
            </form>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Register;