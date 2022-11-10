import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ executeScroll }) => {
	return (
		<section
			className={`relative bg-header-banner bg-fixed bg-cover bg-center bg-no-repeat -mt-3`}
		>
			<div className='absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25'></div>

			<div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
				<div className='max-w-xl text-center sm:text-left'>
					<h1 className='text-3xl font-extrabold sm:text-5xl'>
						Capture Your Moments
						<strong className='block font-extrabold text-rose-700'>
							Just One Click!
						</strong>
					</h1>

					<p className='mt-4 max-w-lg sm:text-xl sm:leading-relaxed'>
						Hi, I'am Sabbir Hossain, a professional Photographer,
						and expert on PhotoShop. You can checkout my service
						Here.
					</p>

					<div className='mt-8 flex flex-wrap gap-4 text-center'>
						<Link
							to='/services'
							className='block w-full btn btn-primary rounded px-12 py-3 text-sm font-medium text-white shadow focus:outline-none sm:w-auto'
						>
							Get Started
						</Link>

						<button
							onClick={executeScroll}
							className='block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto'
						>
							Learn More
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
