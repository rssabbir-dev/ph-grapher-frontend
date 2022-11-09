import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { siteName } from '../../App';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Account = () => {
	const { user } = useContext(AuthContext);
	return (
		<div className='w-full md:w-2/5 p-8 bg-white lg:ml-4 shadow-md mx-auto'>
			<Helmet>
                <title>Account - {siteName}</title>
			</Helmet>
			<div>
				<div className='flex justify-between'>
					<span className='text-xl font-semibold block'>
						User Profile
					</span>
					<button
						href='#'
						className='-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800'
					>
						Edit
					</button>
				</div>

				<span className='text-gray-600'>
					This information is secret so be careful
				</span>
				<div className='w-full p-8 mx-2 flex justify-center'>
					<img
						id='showImage'
						className='max-w-xs w-32 items-center border'
						src={user?.photoURL}
						alt=''
					/>
				</div>
				<div>
					<div className='rounded  shadow p-6'>
						<div className='pb-6'>
							<label
								for='name'
								className='font-semibold text-gray-700 block pb-1'
							>
								Name
							</label>
							<div className='flex'>
								<input
									disabled
									className='border-1  rounded-r px-4 py-2 w-full'
									type='text'
									defaultValue={user?.displayName}
								/>
							</div>
						</div>
						<div className='pb-4'>
							<label
								for='about'
								className='font-semibold text-gray-700 block pb-1'
							>
								Email
							</label>
							<input
								disabled
								className='border-1  rounded-r px-4 py-2 w-full'
								type='email'
								defaultValue={user?.email}
							/>
							<span className='text-gray-600 pt-4 block opacity-70 text-sm'>
								Email address can't be change!
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Account;
