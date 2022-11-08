import React from 'react';

const MyReviewItem = ({ review,handleDelete,handleUpdate }) => {
	const timeConvert = (time) => {
		// Check correct time format and split into components
		time = time
			.toString()
			.match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

		if (time.length > 1) {
			// If time format correct
			time = time.slice(1); // Remove full string match value
			time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
			time[0] = +time[0] % 12 || 12; // Adjust hours
		}
		return time.join(''); // return adjusted time or original string
	};
    const {
        _id,
		user_name,
		user_email,
		createAt,
		user_review,
		service_name,
        service_photo,
	} = review;
	const date = new Date(createAt).toString().split(' ');

	const year = date[3];
	const month = date[1];
	const day = date[2];
	const time = timeConvert(date[4]);

	return (
		<article className='flex bg-white transition hover:shadow-lg shadow border border-gray-100'>
			<div className='rotate-180 p-2 [writing-mode:_vertical-lr]'>
				<div className='flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900'>
					<span>{year}</span>
					<span className='w-px flex-1 bg-gray-900/10'></span>
					<span>
						{month} {day}
					</span>
				</div>
			</div>

			<div className='hidden sm:block sm:basis-56'>
				<img
					alt='Guitar'
					src={service_photo}
					className='aspect-square h-full w-full object-cover'
				/>
			</div>

			<div className='flex flex-1 flex-col justify-between'>
				<div className='border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6'>
					<span>
						<p className='uppercase text-xs opacity-70'>
							Submit At: {time}
						</p>
						<h3 className='font-bold uppercase text-gray-900'>
							{service_name}
						</h3>
					</span>

					<p className='mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3'>
						{user_review}
					</p>
				</div>

				<div className='flex sm:items-end sm:justify-end'>
					<button onClick={()=>handleUpdate(_id)} className='block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400'>
						Update
					</button>
					<button onClick={()=>handleDelete(_id)} className='block btn-primary px-5 py-3 text-center text-xs font-bold uppercase'>
						Delete
					</button>
				</div>
			</div>
		</article>
	);
};

export default MyReviewItem;
