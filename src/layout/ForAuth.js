import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';

const ForAuth = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
};

export default ForAuth;
