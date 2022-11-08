import React from 'react';

const ReviewItem = ({ review }) => {
	const { user_name, user_photo, user_email } = review;
	return (
		<blockquote>
			<header className='sm:flex sm:items-center'>
				<div className='group flex shrink-0 items-center rounded-lg transition'>
					<img
						alt='Man'
						src={user_photo}
						className='h-10 w-10 rounded-full object-cover'
					/>

					<p className='ml-2 hidden text-left text-xs sm:block'>
						<strong className='block font-medium'>
							{user_name}
						</strong>

						<span className='text-gray-500'> {user_email} </span>
					</p>
				</div>
			</header>

			<p className='mt-2 text-gray-700'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
				possimus fuga dolor rerum dicta, ipsum laboriosam est totam
				iusto alias incidunt cum tempore aliquid aliquam error quisquam
				ipsam asperiores! Iste?
			</p>

			<footer className='mt-4'>
				<div className='-ml-1 flex'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 text-yellow-400'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 text-yellow-400'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 text-yellow-400'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 text-yellow-400'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 text-gray-200'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
					</svg>
				</div>
			</footer>
		</blockquote>
	);
};

export default ReviewItem;