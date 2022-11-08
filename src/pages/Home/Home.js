import React from 'react';
import { Link } from 'react-router-dom';
import ServiceSlider from '../Services/ServiceSlider';
import Banner from './Banner';

const Home = () => {
	return (
		<div className='space-y-10'>
			<Banner />
			<div className=' w-11/12 mx-auto space-y-5'>
                <h1 className='text-4xl uppercase font-semibold'>Just one click away!</h1>
                <p>Here is my list of service, you can choose one to hire me for capture your moments.</p>
                <div className='divider'></div>
                <div className='text-right'>
                    <Link to='/services' className='btn btn-primary btn-sm'>See All</Link>
                </div>
				<ServiceSlider />
			</div>
		</div>
	);
};

export default Home;
