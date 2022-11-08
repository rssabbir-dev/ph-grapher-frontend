import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useParams } from 'react-router-dom';
import { serverURL } from '../../routes/router';
import ReviewSection from '../Services/ReviewSection';

const ServiceDetails = () => {
	const params = useParams();
	const [service, setService] = useState({});
	const [quantity, setQuantity] = useState(1);
	const { _id, title, img, description, price } = service;
	useEffect(() => {
		const url = `${serverURL}/service/${params.id}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setService(data));
	}, [params.id]);

	return (
		<>
			<section>
				<div className='relative mx-auto max-w-screen-xl px-4 py-8'>
					<div className='grid grid-cols-1 items-start gap-8 md:grid-cols-2'>
						<div className='grid gap-4'>
							<PhotoProvider>
								<div>
									<PhotoView src={img}>
										<img
											className='aspect-square w-full rounded-xl object-cover'
											src={img}
											alt=''
										/>
									</PhotoView>
								</div>
							</PhotoProvider>
						</div>

						<div className='sticky top-0'>
							<strong className='rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600'>
								Pre Booking
							</strong>

							<div className='mt-8 flex justify-between'>
								<div className='max-w-[35ch]'>
									<h1 className='text-2xl font-bold'>
										{title}
									</h1>
								</div>

								<p className='text-lg font-bold'>
									<span className='font-extrabold'>৳</span>
									{price}/Per Hour
								</p>
							</div>

							<details className='group relative mt-4'>
								<summary className='block'>
									{description}
								</summary>
							</details>

							<form className='mt-8'>
								<fieldset className='mt-4'>
									<legend className='mb-1 text-sm font-medium'>
										Days
									</legend>

									<div className='flow-root'>
										<div className='-m-0.5 flex flex-wrap'>
											{[...Array(5).keys()].map(
												(number) => (
													<label
														className='cursor-pointer p-0.5'
														key={number}
														onClick={() =>
															setQuantity(
																number + 1
															)
														}
													>
														<input className='peer sr-only' />

														<span
															className={`group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium ${number+1 === quantity && 'bg-primary text-white'}`}
														>
															{number + 1}D
														</span>
													</label>
												)
											)}
										</div>
									</div>
								</fieldset>
								<div>
									Total Cost: {price * (quantity*24)} Taka
								</div>
								<div className='mt-8 flex'>
									<button
										type='submit'
										className='ml-3 block rounded px-5 py-3 text-xs btn btn-primary'
									>
										Book Now
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			<ReviewSection service={service} />
		</>
	);
};

export default ServiceDetails;
