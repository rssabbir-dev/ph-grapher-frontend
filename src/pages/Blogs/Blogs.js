import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
		<div className='w-11/12 mx-auto grid gap-5 min-h-screen'>
			<Helmet>
				<title>Blogs - {siteName}</title>
			</Helmet>
			{loading && <Spinner />}
			{!loading && (
				<>
					{blogs.map((blog) => (
						<Blog blog={blog} key={blog._id} />
					))}
				</>
			)}
		</div>
	);
};

export default Blogs;
