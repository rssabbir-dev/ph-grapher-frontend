import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, description, price } = service;
    return (
		<div
			class='relative bg-cover bg-center bg-no-repeat px-4 pb-4 pt-56 sm:px-6 sm:pb-6 sm:pt-64'
			style={{ backgroundImage: `url(${img})` }}
		>
			<span class='absolute inset-0 bg-gradient-to-t from-black to-transparent'></span>

			<strong class='absolute top-4 left-0 bg-primary py-1.5 px-3 text-xs uppercase tracking-wider text-white'>
				New
			</strong>

			<div class='relative text-center flex flex-col justify-between h-full'>
				<h3 class='text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl'>
					{title}
				</h3>

				<p class='mt-1 text-white/95'>{description.slice(0, 100)}...</p>

				<Link
					to='/'
					class='mt-6 block btn btn-primary  px-12 py-3 text-sm font-bold uppercase tracking-wider text-white transition focus:outline-none '
				>
					Details
				</Link>
			</div>
		</div>
	);
};

export default ServiceCard;