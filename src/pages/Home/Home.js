import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='space-y-10'>
            <Banner />
            <Services/>
        </div>
    );
};

export default Home;