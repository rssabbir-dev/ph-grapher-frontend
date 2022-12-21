import React from 'react';

const TestimonialSlide = ({ testimonial }) => {
	const { user_review, user_name, user_rating, user_photo } = testimonial;
	console.log(testimonial);
	return (
		<blockquote className='flex h-full flex-col justify-between bg-gray-100 p-12 cursor-pointer'>
			<div>
				<div className='-ml-1 flex my-2'>
					{[...Array(5).keys()].map((rate) => (
						<svg
							key={rate}
							className={
								rate < user_rating
									? 'text-yellow-400 h-6 w-6'
									: 'text-gray-300 h-6 w-6'
							}
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
						</svg>
					))}
				</div>

				<div className='mt-4'>
					<p className='mt-4 leading-relaxed text-gray-500'>
						{user_review}
					</p>
				</div>
			</div>

			<footer className='mt-8 text-sm text-gray-500 flex items-center gap-2'>
				<div className='avatar'>
					<div className='w-10 rounded-full'>
						<img src={user_photo} alt='' />
					</div>
				</div>
				&mdash; {user_name}
			</footer>
		</blockquote>
	);
};

export default TestimonialSlide;
