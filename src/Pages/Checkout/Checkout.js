import React from 'react';
import './Checkout.css'

const Checkout = () => {
    return (
        <div className='container text-center mt-5' style={{ height: '100vh' }}>
            <h4> To book for this service, you will have to fill out the form for some basic information.</h4>
            <form className='checkout-form mt-lg-5'>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="text" placeholder='Address' required />
                <input type="text" name="number" id="" placeholder='Phone Number' />
                <input className='submit-btn' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Checkout;