import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
	const { _id, title, img, description, price } = service;
	return (
		<div
			className='relative bg-cover bg-center bg-no-repeat px-4 pb-4 pt-56 sm:px-6 sm:pb-6 sm:pt-64 rounded-md h-full'
			style={{ backgroundImage: `url(${img})` }}
		>
			<span className='absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-md border'></span>

			<strong className='absolute top-4 left-0 bg-primary py-1.5 px-3 text-xs uppercase tracking-wider text-white'>
				<span>৳</span>{price}/hour
			</strong>

			<div className='relative text-center flex flex-col justify-between h-full'>
				<h3 className='text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl'>
					{title}
				</h3>

				<p className='mt-1 text-white/95'>
					{description.slice(0, 100)}...
				</p>

				<Link
					to={`/service/${_id}`}
					className='mt-6 block btn btn-primary  px-12 py-3 text-sm font-bold uppercase tracking-wider text-white transition focus:outline-none '
				>
					Details
				</Link>
			</div>
		</div>
	);
};

export default ServiceCard;
