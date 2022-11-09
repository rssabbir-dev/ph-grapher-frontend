import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Spinner = () => {
    return (
		<div className='flex justify-center items-center min-h-screen'>
			<InfinitySpin width='200' color='#E11D48' />
		</div>
	);
};

export default Spinner;