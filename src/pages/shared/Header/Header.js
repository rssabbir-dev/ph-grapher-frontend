import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext)
	const menuList = (
		<>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/my-review'>My Review</Link>
			</li>
			<li>
				<Link to='/my-review'>Add Services</Link>
			</li>
		</>
	);
	return (
		<div className='navbar bg-base-100'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label tabIndex={0} className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
					>
						{menuList}
					</ul>
				</div>
				<a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal p-0'>{menuList}</ul>
			</div>
			<div className='navbar-end'>
				{user?.uid ? (
					<div className='dropdown dropdown-end'>
						<button
							type='button'
							className='group flex shrink-0 items-center rounded-lg transition'
						>
							<span className='sr-only'>Menu</span>
							<img
								alt='Man'
								src='https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
								className='h-10 w-10 rounded-full object-cover'
							/>

							<p className='ml-2 hidden text-left text-xs sm:block'>
								<strong className='block font-medium'>
									Eric Frusciante
								</strong>

								<span className='text-gray-500'>
									{' '}
									eric@frusciante.com{' '}
								</span>
							</p>

							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='ml-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path
									fill-rule='evenodd'
									d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
									clip-rule='evenodd'
								/>
							</svg>
						</button>
						<ul
							tabIndex={0}
							className='menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 rounded-md w-52'
						>
							<li>
								<a>Account</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul>
					</div>
				) : (
					<Link to='/login' className='btn'>Login</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
