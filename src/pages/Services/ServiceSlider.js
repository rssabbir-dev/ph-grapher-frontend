import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import ServiceCard from './ServiceCard';
import { serverURL } from '../../routes/router';

const ServiceSlider = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch(`${serverURL}/services?limit=${3}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setServices(data);
			});
	}, []);
	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={30}
			pagination={{
				clickable: true,
			}}
			breakpoints={{
				720: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
			}}
			modules={[Pagination]}
			className='grid h-full w-11/12 mx-auto'
		>
			{services.map((service) => (
				<SwiperSlide key={service._id}>
					<ServiceCard service={service} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ServiceSlider;
