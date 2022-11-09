import React, { useState, useEffect } from 'react';
import { serverURL } from '../../routes/router';
import Blog from './Blog';

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);
	useEffect(() => {
		fetch(`${serverURL}/blogs`)
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);
	return (
		<div className='w-11/12 mx-auto grid gap-5'>
			{blogs.map((blog) => (
				<Blog blog={blog} key={blog._id} />
			))}
		</div>
	);
};

export default Blogs;
