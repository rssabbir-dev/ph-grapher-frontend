import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../firebase/firebase.config';
import { serverURL } from '../../routes/router';

const AddService = () => {
    const [services, setServices] = useState([]);
    const [count,setCount] = useState(0)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (service) => {
		const { title, img, description, price } = service;
		const postService = {
			title,
			img,
			description,
            price,
            createBy: auth.currentUser.uid,
            createAt:new Date()
		};
		fetch(`${serverURL}/services?uid=${auth.currentUser.uid}`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				authorization: `Bearer ${localStorage.getItem('ph-token')}`,
			},
			body: JSON.stringify(postService),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
    };
    useEffect(() => {
        fetch(`${serverURL}/my-service?uid=${auth.currentUser.uid}`, {
            headers: {
                'content-type':'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setServices(data.servics)
                setCount(data.count)
        })
    },[])
	return (
		<section class='bg-gray-100'>
			<div class='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
				<div class='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5'>
					<div class='lg:col-span-2 lg:py-12'>
						<p class='max-w-xl text-lg'>
							At the same time, the fact that we are wholly owned
							and totally independent from manufacturer and other
							group control gives you confidence that we will only
							recommend what is right for you.
						</p>

						<div class='mt-8'>
							<a href='' class='text-2xl font-bold text-pink-600'>
								0151 475 4450
							</a>

							<address class='mt-2 not-italic'>
								282 Kevin Brook, Imogeneborough, CA 58517
							</address>
						</div>
					</div>

					<div class='rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12'>
						<form
							onSubmit={handleSubmit(onSubmit)}
							class='space-y-4'
						>
							<div>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>
											Service Name
										</span>
									</label>
									<input
										type='text'
										placeholder='Service Name'
										className='input input-bordered'
										{...register('title', {
											required: true,
										})}
									/>
								</div>
								<label className='label'>
									{errors.title && (
										<span className='label-text-alt'>
											This field is required
										</span>
									)}
								</label>
							</div>

							<div class='grid grid-cols-1 gap-4 sm:grid-cols-2'>
								<div>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Service Photo
											</span>
										</label>
										<input
											type='text'
											placeholder='Service Photo'
											className='input input-bordered'
											{...register('img', {
												required: true,
											})}
										/>
									</div>
									<label className='label'>
										{errors.img && (
											<span className='label-text-alt'>
												This field is required
											</span>
										)}
									</label>
								</div>

								<div>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Service Price
											</span>
										</label>
										<input
											type='number'
											placeholder='Service Price'
											className='input input-bordered'
											{...register('price', {
												required: true,
											})}
										/>
									</div>
									<label className='label'>
										{errors.price && (
											<span className='label-text-alt'>
												This field is required
											</span>
										)}
									</label>
								</div>
							</div>

							<div>
								<div className='form-control space-y-3'>
									<textarea
										placeholder='Describe you feedback'
										className='textarea textarea-bordered'
										rows='8'
										{...register('description', {
											required: true,
										})}
									/>
								</div>
								<label className='label'>
									{errors.description && (
										<span className='label-text-alt'>
											This field is required
										</span>
									)}
								</label>
							</div>

							<div class='mt-4'>
								<button class='inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto'>
									<span class='font-medium'>
										{' '}
										Send Enquiry{' '}
									</span>

									<svg
										xmlns='http://www.w3.org/2000/svg'
										class='ml-3 h-5 w-5'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M14 5l7 7m0 0l-7 7m7-7H3'
										/>
									</svg>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AddService;
