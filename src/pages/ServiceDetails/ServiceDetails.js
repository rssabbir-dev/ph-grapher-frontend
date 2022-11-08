import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useParams } from 'react-router-dom';
import { serverURL } from '../../routes/router';
import ReviewSection from '../Services/ReviewSection';

const ServiceDetails = () => {
	const params = useParams();
	const [service, setService] = useState({});
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
									{price}
								</p>
							</div>

							<details className='group relative mt-4'>
								<summary className='block'>
									{description}
								</summary>
							</details>

							<form className='mt-8'>
								<fieldset>
									<legend className='mb-1 text-sm font-medium'>
										Color
									</legend>

									<div className='flow-root'>
										<div className='-m-0.5 flex flex-wrap'>
											<label
												for='color_tt'
												className='cursor-pointer p-0.5'
											>
												<input
													type='radio'
													name='color'
													id='color_tt'
													className='peer sr-only'
												/>

												<span className='group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white'>
													Texas Tea
												</span>
											</label>

											<label
												for='color_fr'
												className='cursor-pointer p-0.5'
											>
												<input
													type='radio'
													name='color'
													id='color_fr'
													className='peer sr-only'
												/>

												<span className='group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white'>
													Fiesta Red
												</span>
											</label>

											<label
												for='color_cb'
												className='cursor-pointer p-0.5'
											>
												<input
													type='radio'
													name='color'
													id='color_cb'
													className='peer sr-only'
												/>

												<span className='group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white'>
													Cobalt Blue
												</span>
											</label>
										</div>
									</div>
								</fieldset>

								<fieldset className='mt-4'>
									<legend className='mb-1 text-sm font-medium'>
										Size
									</legend>

									<div className='flow-root'>
										<div className='-m-0.5 flex flex-wrap'>
											<label
												for='size_xs'
												className='cursor-pointer p-0.5'
											>
												<input
													type='radio'
													name='size'
													id='size_xs'
													className='peer sr-only'
												/>

												<span className='group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white'>
													XS
												</span>
											</label>

											<label
												for='size_s'
												className='cursor-pointer p-0.5'
											>
												<input
													type='radio'
													name='size'
													id='size_s'
													className='peer sr-only'
												/>

												<span className='group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white'>
													S
												</span>
											</label>

											<label
												for='size_m'
												className='cursor-pointer p-0.5'
											>
												<input
													type='radio'
													name='size'
													id='size_m'
													className='peer sr-only'
												/>

												<span className='group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white'>
													M
												</span>
											</label>

											<label
												for='size_l'
												className='cursor-pointer p-0.5'
											>
												<input
													type='radio'
													name='size'
													id='size_l'
													className='peer sr-only'
												/>

												<span className='group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white'>
													L
												</span>
											</label>

											<label
												for='size_xl'
												className='cursor-pointer p-0.5'
											>
												<input
													type='radio'
													name='size'
													id='size_xl'
													className='peer sr-only'
												/>

												<span className='group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white'>
													XL
												</span>
											</label>
										</div>
									</div>
								</fieldset>

								<div className='mt-8 flex'>
									<div>
										<label
											for='quantity'
											className='sr-only'
										>
											Qty
										</label>

										<input
											type='number'
											id='quantity'
											min='1'
											value='1'
											className='w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none'
										/>
									</div>

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
			<ReviewSection />
		</>
	);
};

export default ServiceDetails;
