import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { serverURL } from '../../routes/router';
import ReviewItem from './ReviewItem';

const ReviewSection = ({ service }) => {
	const params = useParams()
	const { user } = useContext(AuthContext);
	const [reviews, setReviews] = useState([])
	const [count,setCount] = useState(0)
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm();
	const onSubmit = (data) => {
		const { user_review } = data;
		const modal = document.getElementById('my-modal');
		const review = {
			user_name: user.displayName,
			user_email: user.email,
			user_uid: user.uid,
			user_photo: user.photoURL,
			user_review: user_review,
			user_rating: 4,
			service_name: service.title,
			service_id: service._id,
			service_photo: service.img,
			post_date: new Date(),
		};
		fetch(`${serverURL}/review`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(review),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					modal.checked = false;
					reset()
				}
				console.log(data);
			});
	};
	useEffect(() => {
		fetch(`${serverURL}/reviews?service_id=${params.id}`)
		.then(res => res.json())
			.then(data => {
				setReviews(data.reviews)
				setCount(data.count)
		})
	},[params.id])
	return (
		<section>
			{/* Review Modal */}

			{/* Put this part before </body> tag */}
			<input type='checkbox' id='my-modal' className='modal-toggle' />
			<div className='modal'>
				<form onSubmit={handleSubmit(onSubmit)} className='modal-box'>
					{user?.uid ? (
						<div>
							<h3 className='font-bold text-lg'>Add a review</h3>

							<div className='form-control'>
								<textarea
									placeholder='Describe you feedback'
									className='textarea textarea-bordered mt-3'
									{...register('user_review', {
										required: true,
									})}
								/>
							</div>
							<label className='label'>
								{errors.user_review && (
									<span className='label-text-alt'>
										This field is required
									</span>
								)}
							</label>
							<div className='modal-action'>
								<label htmlFor='my-modal' className='btn'>
									Close
								</label>
								<button className='btn btn-primary'>
									Submit
								</button>
							</div>
						</div>
					) : (
						<div>
							<div className='flex flex-col gap-5 justify-center items-center'>
								<h3 className='text-2xl'>
									Please login to add a review
								</h3>
								<Link className='btn btn-primary' to='/login'>
									Login Now
								</Link>
							</div>
							<div>
								<div className='modal-action'>
									<label htmlFor='my-modal' className='btn'>
										Close
									</label>
								</div>
							</div>
						</div>
					)}
				</form>
			</div>
			{/* Review Modal */}
			<div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'>
				<h2 className='text-xl font-bold sm:text-2xl'>
					Customer Reviews
				</h2>

				<div className='flex justify-between items-center'>
					<div className='mt-4 flex items-center'>
						<p className='text-3xl font-medium'>
							3.8
							<span className='sr-only'>
								{' '}
								Average review score{' '}
							</span>
						</p>

						<div className='ml-4'>
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

							<p className='mt-0.5 text-xs text-gray-500'>
								Based on {count} reviews
							</p>
						</div>
					</div>
					<div>
						<label htmlFor='my-modal' className='btn btn-primary'>
							Write A Review
						</label>
					</div>
				</div>

				<div className='mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2'>
					{
						reviews.map(review => <ReviewItem key={review._id} review={review}/>)
					}
				</div>
			</div>
		</section>
	);
};

export default ReviewSection;
