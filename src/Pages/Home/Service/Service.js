import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, description, price, img } = service;
    const navigate = useNavigate();
    const navigateToCheckout = () => {
        navigate('/checkout')
    }
    return (
        <div className='service col'>
            <img className='w-100 py-2' src={img} alt="" />
            <h2 className='fw-bold mt-2'>{name}</h2>
            <p>{description}</p>
            <p><span className='fw-bold'>Session fee:</span> ${price}</p>
            <button onClick={navigateToCheckout} className='service-btn'>Book this service</button>
        </div>
    );
};

export default Service;