import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import ServiceCard from './ServiceCard';

const ServiceSlider = ({services}) => {
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
			className='grid h-full'
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
