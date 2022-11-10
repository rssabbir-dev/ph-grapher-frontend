import React, { useContext, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { siteName } from '../../App';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Account = () => {
	const { user,updateUserProfile } = useContext(AuthContext);
	const [edit, setEdit] = useState(true)
	
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [userName, setUserName] = useState(user?.displayName);
	const [userPhoto,setUserPhoto] = useState(user?.photoURL)
	const onSubmit = (data) => {
		const { name, photoURL } = data;
		const profileData = { displayName: name, photoURL: photoURL }
		updateUserProfile(profileData)
			.then(() => {
				Swal.fire({
					title: 'Updated!',
					text: 'Your Account Updated. !',
					icon: 'success',
					showCancelButton: false,
					cancelButtonColor: '#d33',
				});
				setEdit(false)
				setUserName(name)
				setUserPhoto(photoURL)
			})
		.catch((err)=>console.log(err))
	};
	return (
		<HelmetProvider>
			<div className='min-h-screen my-10 w-11/12 mx-auto'>
				<div className='uppercase'>
					<h1 className='text-3xl font-light'>Manage Account</h1>
					<p className='text-sm'>
						This information is secret so be careful
					</p>
					<div className='divider'></div>
				</div>
				<Helmet>
					<title>Account - {siteName}</title>
				</Helmet>
				<div
					style={{ margin: 'auto' }}
					className='w-full md:w-2/5 p-8 bg-white lg:ml-4 shadow-md'
				>
					<div className='flex justify-between'>
						<span className='text-xl font-semibold block'>
							{userName}
						</span>
						<button
							onClick={() => setEdit(!edit)}
							className='-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800'
						>
							{edit ? 'Edit' : 'Cancel'}
						</button>
					</div>
					<div className='w-full p-8 mx-2 flex justify-center'>
						<img
							id='showImage'
							className='max-w-xs w-32 items-center border'
							src={userPhoto}
							alt=''
						/>
					</div>
					<div>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className='rounded  shadow p-6'
						>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Name</span>
								</label>
								<input
									required
									defaultValue={user?.displayName}
									disabled={edit}
									type='text'
									placeholder='name'
									className='input input-bordered'
									{...register('name', {
										required: false,
									})}
								/>
								<label className='label'>
									{errors.name && (
										<span className='label-text-alt'>
											This field is required
										</span>
									)}
								</label>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>
										Photo URL
									</span>
								</label>
								<input
									required
									type='text'
									disabled={edit}
									defaultValue={user?.photoURL}
									placeholder='Photo URL'
									className='input input-bordered'
									{...register('photoURL', {
										required: false,
									})}
								/>
								<label className='label'>
									{errors.photoURL && (
										<span className='label-text-alt'>
											This field is required
										</span>
									)}
								</label>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									defaultValue={user?.email}
									disabled
									type='email'
									placeholder='email'
									className='input input-bordered'
									{...register('email', {
										required: false,
									})}
								/>
								<label className='label'>
									{errors.email && (
										<span className='label-text-alt'>
											This field is required
										</span>
									)}
									<span className='text-gray-600 pt-4 block opacity-70 text-sm'>
										Email address can't be change!
									</span>
								</label>
							</div>
							<div>
								{!edit && (
									<button className='btn btn-primary btn-block'>
										Save Change
									</button>
								)}
							</div>
						</form>
					</div>
				</div>
			</div>
		</HelmetProvider>
	);
};

export default Account;
