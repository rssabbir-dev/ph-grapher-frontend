import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const BtnSpinner = () => {
	return (
		<ThreeDots
			height='80'
			width='80'
			radius='9'
			color='#E11D48'
			ariaLabel='three-dots-loading'
			wrapperStyle={{}}
			wrapperClassName=''
			visible={true}
		/>
	);
};

export default BtnSpinner;
