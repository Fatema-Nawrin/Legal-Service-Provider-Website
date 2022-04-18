import React from 'react';
import Banner from '../Banner/Banner';
import Hours from '../Hours/Hours';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Hours></Hours>
        </div>
    );
};

export default Home;