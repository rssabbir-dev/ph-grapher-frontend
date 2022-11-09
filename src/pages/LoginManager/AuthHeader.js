import React from 'react';
import { Link } from 'react-router-dom';
import { siteName } from '../../App';
import logo from '../../assets/images/logo.png'

const AuthHeader = () => {
    return (
		<div className='navbar bg-base-100'>
			<div className='navbar-start'></div>
			<div className='navbar-center'>
				<Link
					to='/'
					className='normal-case text-xl font-bold flex justify-center items-center'
				>
					<img className='w-10' src={logo} alt='' />
					<span>{siteName}</span>
				</Link>
			</div>
			<div className='navbar-end'></div>
		</div>
	);
};

export default AuthHeader;