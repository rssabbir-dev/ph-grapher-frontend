import React from 'react';
import { Link } from 'react-router-dom';

const AuthHeader = () => {
    return (
		<div className='navbar bg-base-100'>
			<div className='navbar-start'>
			</div>
			<div className='navbar-center'>
				<Link to='/' className='btn btn-ghost normal-case text-xl'>Ph_Grapher</Link>
			</div>
			<div className='navbar-end'>
			</div>
		</div>
	);
};

export default AuthHeader;