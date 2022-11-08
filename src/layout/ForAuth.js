import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthHeader from '../pages/LoginManager/AuthHeader';

const ForAuth = () => {
	return (
		<div>
			<AuthHeader/>
			<Outlet />
		</div>
	);
};

export default ForAuth;
