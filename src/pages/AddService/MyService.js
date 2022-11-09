import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyService = ({ service }) => {
    const { _id, title, img, description } = service;
    const {user}= useContext(AuthContext)
	return (
		<article class='rounded-xl border-2 border-gray-100 bg-white'>
			<div class='flex items-start p-6'>
				<div className='h-20 w-32'>
					<img
						alt={title}
						src={img}
						class='h-full w-full rounded-lg object-cover'
					/>
				</div>

				<div class='ml-4'>
					<h3 class='font-medium sm:text-lg'>
						<Link to={`/service/${_id}`} class='hover:underline'>
							{title}
						</Link>
					</h3>

					<p class='text-sm text-gray-700 line-clamp-2'>
						{description.length >= 100
							? description.slice(0, 100) + '...'
							: description}
					</p>

					<div class='mt-2 sm:flex sm:items-center sm:gap-2'>
						<p class='hidden sm:block sm:text-xs sm:text-gray-500'>
							Added by {user?.displayName}
                        </p>
                        
					</div>
				</div>
			</div>
		</article>
	);
};

export default MyService;
