import React from 'react';
import ServiceSlider from '../Services/ServiceSlider';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='space-y-10'>
            <Banner />
            <ServiceSlider/>
        </div>
    );
};

export default Home;