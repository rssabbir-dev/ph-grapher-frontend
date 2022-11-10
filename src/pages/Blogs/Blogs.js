import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { siteName } from '../../App';
import { serverURL } from '../../routes/router';
import Spinner from '../shared/Spinner/Spinner';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
		fetch(`${serverURL}/blogs`)
			.then((res) => res.json())
            .then((data) => {
                setBlogs(data)
                setLoading(false)
            });
	}, []);
	return (
		<HelmetProvider>
			<div className='w-11/12 mx-auto grid gap-5 min-h-screen py-10'>
				<Helmet>
					<title>Blogs - {siteName}</title>
				</Helmet>
				{loading && <Spinner />}
				<div className='uppercase'>
					<h1 className='text-3xl font-light'>
						Checkout my blogs
					</h1>
					<p className='text-sm'>
						I posted new blog on every week
					</p>
					<div className='divider'></div>
				</div>
				{!loading && (
					<>
						{blogs.map((blog) => (
							<Blog blog={blog} key={blog._id} />
						))}
					</>
				)}
			</div>
		</HelmetProvider>
	);
};

export default Blogs;
