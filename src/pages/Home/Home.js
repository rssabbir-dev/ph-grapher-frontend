import React, { useEffect, useRef, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { siteName } from '../../App';
import { serverURL } from '../../routes/router';
import ServiceSlider from '../Services/ServiceSlider';
import Spinner from '../shared/Spinner/Spinner';
import Banner from './Banner';
import Newsletter from './Newsletter';
import Testimonial from './Testimonial';

const Home = () => {
	const [services, setServices] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		fetch(`${serverURL}/services?limit=${3}`)
			.then((res) => res.json())
			.then((data) => {
				setServices(data);
				setLoading(false);
			});
	}, []);
	const scrollToRef = (ref) => {
		// return window.scrollTo(0, ref.current.offsetTop)
		return window.scrollTo({
			top: ref.current.offsetTop,
			behavior: 'smooth',
		});
	}
	const executeScroll = () => {
		return scrollToRef(testimonialRef)
	}
	const testimonialRef = useRef(null)
	return (
		<HelmetProvider>
			<div className='space-y-10 min-h-screen'>
				<Helmet>
					<title>Home - {siteName}</title>
				</Helmet>
				{loading && <Spinner />}
				{!loading && (
					<>
						<Banner executeScroll={executeScroll} />
						<div className='bg-white pt-10'>
							<div className='w-11/12 mx-auto space-y-5'>
								<h1 className='text-4xl uppercase font-semibold'>
									Just one click away!
								</h1>
								<p>
									Here is my list of service, you can choose
									one to hire me for capture your moments.
								</p>
								<div className='divider'></div>
								<div className='text-right'>
									<Link
										to='/services'
										className='btn btn-primary btn-sm'
									>
										See All
									</Link>
								</div>
								<ServiceSlider services={services} />
								<div ref={testimonialRef}>
									<Testimonial />
								</div>
							</div>
							<Newsletter />
						</div>
					</>
				)}
			</div>
		</HelmetProvider>
	);
};

export default Home;
