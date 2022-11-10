import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { siteName } from '../../App';
import { serverURL } from '../../routes/router';
import Pagination from '../shared/Pagination/Pagination';
import Spinner from '../shared/Spinner/Spinner';
import ServiceCard from './ServiceCard';

const Services = () => {
	const [services, setServices] = useState([]);
	const [loading, setLoading] = useState(false)
	const [count, setCount] = useState(0);
	const [size, setSize] = useState(6);
	const [page,setPage] = useState(0)
	const pages = Math.ceil(count / size);
	const paginationInfo = {
		size,
		setSize,
		page,
		setPage,
		pages
	}


	useEffect(() => {
		setLoading(true)
		const url = `${serverURL}/services?size=${size}&page=${page}`
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setServices(data.services);
				setCount(data.count)
				setLoading(false)
			});
	}, [page, size]);
	return (
		<HelmetProvider>
			<div className='w-11/12 mx-auto min-h-screen my-10'>
				<Helmet>
					<title>Services - {siteName}</title>
				</Helmet>
				{loading && <Spinner />}
				{!loading && (
					<>
						<div className='uppercase'>
							<h1 className='text-3xl font-light'>Here is the all my services</h1>
						<p className='text-sm'>
							You simply pickup one of them for your upcoming
							events
							</p>
							<div className='divider'></div>
						</div>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 h-full'>
							{services.map((service) => (
								<ServiceCard
									key={service._id}
									service={service}
								/>
							))}
						</div>

						<Pagination paginationInfo={paginationInfo} />
					</>
				)}
			</div>
		</HelmetProvider>
	);
};

export default Services;
