import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { siteName } from '../../App';
import { serverURL } from '../../routes/router';
import Spinner from '../shared/Spinner/Spinner';
import ServiceCard from './ServiceCard';

const Services = () => {
	const [services, setServices] = useState([]);
	const [loading,setLoading] = useState(false)
	useEffect(() => {
		setLoading(true)
		fetch(`${serverURL}/services`)
			.then((res) => res.json())
			.then((data) => {
				setServices(data);
				setLoading(false)
			});
	}, []);
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 h-full w-11/12 mx-auto min-h-screen'>
			<Helmet>
				<title>Services - {siteName}</title>
			</Helmet>
			{loading && <Spinner />}
			{!loading && (
				<>
					{services.map((service) => (
						<ServiceCard key={service._id} service={service} />
					))}
				</>
			)}
		</div>
	);
};

export default Services;
