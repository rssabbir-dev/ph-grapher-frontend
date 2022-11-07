import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import Header from '../pages/shared/Header/Header';

const Main = () => {
    return (
		<div>
			<Header />
			<div className='space-y-20'>
				<Outlet />
				<Footer />
			</div>
		</div>
	);
};

export default Main;