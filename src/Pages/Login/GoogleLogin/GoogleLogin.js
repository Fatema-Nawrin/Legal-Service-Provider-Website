import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googlelogo from '../../../Images/google-logo.png';
import Loading from '../../Shared/Loading/Loading';
import './GoogleLogin.css';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (user) {
        navigate('/home');
    }
    if (loading) {
        return <Loading></Loading>
    }
    let errorDiv;
    if (error) {
        errorDiv = <div>
            <p className='text-danger'>Error:{error?.message}</p>
        </div>
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-dark w-50'></div>
                <p className='mt-3 px-2'> or </p>
                <div style={{ height: '2px' }} className='bg-dark w-50'></div>
            </div>
            {errorDiv}
            <div className='pb-4'>
                <button onClick={() => signInWithGoogle()}
                    className='w-75 d-block mx-auto py-2 btn-style'>
                    <img
                        style={{ width: '30px' }}
                        src={googlelogo}
                        className='pe-1'
                        alt="" />
                    Continue With Google
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;