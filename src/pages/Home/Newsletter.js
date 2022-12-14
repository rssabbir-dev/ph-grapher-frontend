import React from 'react';
import Swal from 'sweetalert2';

const Newsletter = () => {
	const handleSubscribe = (event) => {
		event.preventDefault();
		Swal.fire({
			title: 'Thank You!',
			text: 'Successfully subscribed Ph_Grapher newsletter. !',
			icon: 'success',
			showCancelButton: false,
			cancelButtonColor: '#d33',
		});
		event.target.reset();
	};
	return (
		<section className='bg-gray-50'>
			<div className='p-8 md:p-12 lg:px-16 lg:py-24'>
				<div className='mx-auto max-w-lg text-center'>
					<h2 className='text-2xl font-bold text-gray-900 md:text-3xl'>
						Get My Update
					</h2>

					<p className='hidden text-gray-500 sm:mt-4 sm:block'>
						Know about my schedule - Pro tips about photography and
						photo editing - and etc.
					</p>
				</div>

				<div className='mx-auto mt-8 max-w-xl'>
					<form
						onSubmit={handleSubscribe}
						className='sm:flex sm:gap-4'
					>
						<div className='sm:flex-1'>
							<label className='sr-only'>Email</label>

							<input
								type='email'
								placeholder='Email address'
								className='w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none'
								required
							/>
						</div>

						<button className='group mt-4 flex w-full items-center justify-center rounded-md px-5 py-3  focus:outline-none sm:mt-0 sm:w-auto btn btn-primary'>
							<span className='text-sm font-medium'>
								{' '}
								Subscribe{' '}
							</span>

							<svg
								className='ml-3 h-5 w-5'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M17 8l4 4m0 0l-4 4m4-4H3'
								/>
							</svg>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Newsletter;
