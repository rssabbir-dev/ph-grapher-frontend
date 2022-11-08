import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import registrationImg from '../../assets/images/person.jpg';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { serverURL } from '../../routes/router';

const Registration = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from?.pathname || '/';
	const { loginUser } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		const { email, password } = data;
		handleLoginUser(email, password);
	};
	const handleLoginUser = (email, password) => {
		loginUser(email, password)
			.then((res) => {
				const user = res.user;
				toast.success('Login Success');
				handleJwtToken(user)
				navigate(from, { replace: true });
			})
			.catch((err) => toast.error(err.message));
	};
	const handleJwtToken = (user) => {
		const currentUser = { uid: user?.uid };
		fetch(`${serverURL}/jwt`, {
			method: 'POST',
			headers: {
				'content-type':'application/json'
			},
			body:JSON.stringify(currentUser)
		})
			.then(res => res.json())
			.then(token => {
			localStorage.setItem('ph-token',token.token)
		})
	}
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

							<div className='mb-2'>
								<p className='text-sm text-gray-500'>
									By login this site, you agree to our{' '}
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
									Login
								</button>

								<p className='mt-4 text-sm text-gray-500 sm:mt-0'>
									Don't have an account?{' '}
									<Link
										to='/registration'
										className='text-gray-700 underline'
									>
										Create an account
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
