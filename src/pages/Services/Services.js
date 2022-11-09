import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { siteName } from '../../App';
import { serverURL } from '../../routes/router';
import ServiceCard from './ServiceCard';

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch(`${serverURL}/services`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setServices(data);
			});
	}, []);
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 h-full w-11/12 mx-auto'>
			<Helmet>
				<title>Services - {siteName}</title>
			</Helmet>
			{services.map((service) => (
				<ServiceCard key={service._id} service={service} />
			))}
		</div>
	);
};

export default Services;
