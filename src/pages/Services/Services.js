import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/services')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setServices(data);
			});
	}, []);
	return (
		<div className='grid grid-cols-3 gap-10 h-full'>
			{services.map((service) => (
				<ServiceCard key={service._id} service={service} />
			))}
		</div>
	);
};

export default Services;
