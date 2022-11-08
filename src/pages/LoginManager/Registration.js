import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import registrationImg from '../../assets/images/person.jpg';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Registration = () => {
	const navigate = useNavigate();
	const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		const { email, password, name, photoURL } = data;
		handleCreateUser(email, password, name, photoURL);
	};
	const handleCreateUser = (email, password, name, photoURL) => {
		createUser(email, password)
			.then((res) => {
				const user = res.user;
				handleUpdateUserProfile(name, photoURL);
				toast.success('Registration Success');
			})
			.catch((err) => toast.error(err.message));
	};
	const handleUpdateUserProfile = (name, photoURL) => {
		const profileData = {
			displayName: name,
			photoURL,
		};
		updateUserProfile(profileData)
			.then(() => {
				logOut().then(() => {
					toast.success('Now you can login');
					navigate('/login');
				});
			})
			.catch((err) => toast.error(err.message));
	};
	return (
		<section className='bg-white'>
			<div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
				<section className='relative flex h-32 items-end bg-gradient-to-t from-black to-transparent lg:col-span-5 lg:h-full xl:col-span-6'>
					<img
						alt='Night'
						src={registrationImg}
						className='absolute inset-0 h-full w-full object-cover opacity-50'
					/>

					<div className='hidden lg:relative lg:block lg:p-12'>
						<span className='block text-white'>
							<span className='sr-only'>Home</span>
							<FontAwesomeIcon
								className='text-3xl'
								icon={faCamera}
							/>
						</span>

						<h2 className='mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl'>
							Just one click away
						</h2>

						<p className='mt-4 leading-relaxed text-white/90'>
							For hire me register my website for get customize
							services along with my photography skill
						</p>
					</div>
				</section>

				<main
					aria-label='Main'
					className='flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6'
				>
					<div className='max-w-xl lg:max-w-3xl'>
						<div className='relative -mt-16 block lg:hidden'>
							<span className='inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary sm:h-20 sm:w-20'>
								<span className='sr-only'>Home</span>
								<FontAwesomeIcon
									className='text-3xl'
									icon={faCamera}
								/>
							</span>

							<h1 className='mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl'>
								Just one click away
							</h1>

							<p className='mt-4 leading-relaxed text-gray-500'>
								For hire me register my website for get
								customize services along with my photography
								skill
							</p>
						</div>

						<form
							onSubmit={handleSubmit(onSubmit)}
							className='mt-8'
						>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Name</span>
								</label>
								<input
									type='text'
									placeholder='name'
									className='input input-bordered'
									{...register('name', {
										required: true,
									})}
								/>
							</div>
							<label className='label'>
								{errors.name && (
									<span className='label-text-alt'>
										This field is required
									</span>
								)}
							</label>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									type='email'
									placeholder='email'
									className='input input-bordered'
									{...register('email', {
										required: true,
									})}
								/>
							</div>
							<label className='label'>
								{errors.email && (
									<span className='label-text-alt'>
										This field is required
									</span>
								)}
							</label>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>
										Photo URL
									</span>
								</label>
								<input
									type='text'
									placeholder='photoURL'
									className='input input-bordered'
									{...register('photoURL', {
										required: true,
									})}
								/>
							</div>
							<label className='label'>
								{errors.photoURL && (
									<span className='label-text-alt'>
										This field is required
									</span>
								)}
							</label>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Password</span>
								</label>
								<input
									type='text'
									placeholder='Password'
									className='input input-bordered'
									{...register('password', {
										required: true,
									})}
								/>
							</div>
							<label className='label'>
								{errors.password && (
									<span className='label-text-alt'>
										This field is required
									</span>
								)}
							</label>

							<div className='my-2'>
								<label
									for='MarketingAccept'
									className='flex gap-4'
								>
									<input
										type='checkbox'
										id='MarketingAccept'
										name='marketing_accept'
										className='h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm'
									/>

									<span className='text-sm text-gray-700'>
										I want to receive emails about events,
										product updates and company
										announcements.
									</span>
								</label>
							</div>

							<div className='mb-2'>
								<p className='text-sm text-gray-500'>
									By creating an account, you agree to our{' '}
									<Link className='text-gray-700 underline'>
										terms and conditions
									</Link>{' '}
									and{' '}
									<Link className='text-gray-700 underline'>
										privacy policy
									</Link>
									.
								</p>
							</div>

							<div className=' sm:flex sm:items-center sm:gap-4'>
								<button className='btn btn-primary rounded-md px-12 py-3'>
									Create an account
								</button>

								<p className='mt-4 text-sm text-gray-500 sm:mt-0'>
									Already have an account?{' '}
									<Link
										to='/login'
										className='text-gray-700 underline'
									>
										Log in
									</Link>
									.
								</p>
							</div>
						</form>
					</div>
				</main>
			</div>
		</section>
	);
};

export default Registration;
