import { faEnvelope, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Hours = () => {
    return (
        <div style={{ fontFamily: 'Roboto' }} className='container text-center mt-3 mt-lg-5'>
            <hr />
            <h1 className='text-uppercase mt-5 fw-bold'>Contact Info</h1>
            <p className='py-3  fs-5'>To discuss your case or legal concern with me, you can meet me in person or contact me via email or phone number promptly.</p>
            <p className='mb-1'><FontAwesomeIcon icon={faMapLocation} style={{ color: 'lightsalmon' }}></FontAwesomeIcon> 975 F, Mirkwood Street, Rivendell.</p>
            <p className='mb-1'><FontAwesomeIcon icon={faPhone} style={{ color: 'lightsalmon' }}></FontAwesomeIcon> 444-555-666</p>

            <p><FontAwesomeIcon icon={faEnvelope} style={{ color: 'lightsalmon' }}> </FontAwesomeIcon> ashley@graylaw.com</p>

            <h3>Business Hours:</h3>
            <p className='mb-1'>
                <span style={{ color: 'lightsalmon' }}>Monday-Friday: </span>   9am-5pm
            </p>
            <p><span style={{ color: 'lightsalmon' }}> Saturday &amp; Sunday: </span>closed
            </p>
        </div>
    );
};

export default Hours;