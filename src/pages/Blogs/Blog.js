import React from 'react';

const Blog = ({ blog }) => {
	const { name, description } = blog;
	return (
		<article class='rounded-xl border-2 border-gray-100 bg-white'>
			<div class='flex items-start p-6'>
				<div class='ml-4'>
					<h3 class='font-medium sm:text-lg'>
						<span  class='hover:underline'>
							{name}
						</span>
					</h3>

					<p class='text-sm text-gray-700 line-clamp-2'>
						{description}
					</p>
				</div>
			</div>
		</article>
	);
};

export default Blog;
