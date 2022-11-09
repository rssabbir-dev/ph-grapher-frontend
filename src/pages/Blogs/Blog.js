import React from 'react';

const Blog = ({ blog }) => {
	const { name, description } = blog;
	return (
		<article className='rounded-xl border-2 border-gray-100 bg-white'>
			<div className='flex items-start p-6'>
				<div className='ml-4'>
					<h3 className='font-medium sm:text-lg'>
						<span className='hover:underline'>{name}</span>
					</h3>

					<p className='text-sm text-gray-700 line-clamp-2'>
						{description}
					</p>
				</div>
			</div>
		</article>
	);
};

export default Blog;
