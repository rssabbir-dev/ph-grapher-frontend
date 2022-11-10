import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper';
import { serverURL } from '../../routes/router';
import { data } from 'autoprefixer';
import TestimonialSlide from './TestimonialSlide';
const Testimonial = () => {
	const [testimonials, setTestimonials] = useState([]);
	useEffect(() => {
		fetch(`${serverURL}/testimonials`)
			.then((res) => res.json())
			.then((data) => setTestimonials(data));
	}, []);
	return (
		<section className=''>
			<div className='mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:mr-0 lg:pl-8 lg:pr-0'>
				<div className='grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16'>
					<div className='max-w-xl text-center sm:text-left'>
						<h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
							Don't just take my word for it...
							<br className='hidden sm:block lg:hidden' />
							Read reviews from my customers
						</h2>

						<p className='mt-4 text-gray-500'>
							Here is the few customer review they give me after I
							done there work's.
						</p>

						<div className='hidden lg:mt-8 lg:flex lg:gap-4'>
							<button className='prev-button rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white'>
								<span className='sr-only'>Previous Slide</span>
								<svg
									className='h-5 w-5 -rotate-180 transform'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9 5l7 7-7 7'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
									/>
								</svg>
							</button>

							<button className='next-button rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white'>
								<span className='sr-only'>Next Slide</span>
								<svg
									className='h-5 w-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9 5l7 7-7 7'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
									/>
								</svg>
							</button>
						</div>
					</div>

					<div className='-mx-6 lg:col-span-2 lg:mx-0'>
						<div className='!overflow-hidden'>
							<Swiper
								modules={[Navigation, Autoplay]}
								autoplay={{
									delay: 3000,
									disableOnInteraction: false,
								}}
								navigation={{
									nextEl: '.next-button',
									prevEl: '.prev-button',
								}}
								loop={true}
								className='grid h-full'
							>
								{testimonials.map((testimonial) => (
									<SwiperSlide key={testimonial._id}>
										<TestimonialSlide
											testimonial={testimonial}
										/>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>

				<div className='mt-8 flex justify-center gap-4 lg:hidden'>
					<button
						aria-label='Previous slide'
						className='prev-button rounded-full border border-primary p-4 text-primary hover:bg-primary hover:text-white'
					>
						<svg
							className='h-5 w-5 -rotate-180 transform'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M9 5l7 7-7 7'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
							/>
						</svg>
					</button>

					<button
						aria-label='Next slide'
						className='next-button next-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white'
					>
						<svg
							className='h-5 w-5'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M9 5l7 7-7 7'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
