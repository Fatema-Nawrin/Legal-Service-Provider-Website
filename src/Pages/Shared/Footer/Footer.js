import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer mt-5 py-5'>
            <div className='w-75 mx-auto'>
                <div className='row row-cols-2'>
                    <div>
                        <h5 style={{ color: 'lightsalmon' }}>Overview</h5>
                        <li>Services</li>
                        <li>Reviews</li>
                        <li>Contact</li>
                    </div>
                    <div>
                        <h5 style={{ color: 'lightsalmon' }}>Policies</h5>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <p className='pt-5 mb-0'>Copyright &copy; 2022, Ashley Gray Law.</p>
                <p className='mb-0'>All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;