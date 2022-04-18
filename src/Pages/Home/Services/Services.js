import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container services text-center mb-4'>
            <h1 className='my-5'>Services</h1>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}>

                    </Service>)
                }

            </div>

        </div>
    );
};

export default Services;