import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { serverURL } from '../../routes/router';
import MyReviewItem from './MyReviewItem';

const MyReview = () => {
	const [reviews, setReviews] = useState([]);
	const { user } = useContext(AuthContext);
	useEffect(() => {
		fetch(`${serverURL}/my-review?uid=${user?.uid}`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem('ph-token')}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setReviews(data.reviews);
			});
	}, [user?.uid]);
	return (
		<div className='grid gap-10 w-11/12 mx-auto'>
			{reviews.map((review) => (
				<MyReviewItem review={review} key={review._id} />
			))}
		</div>
	);
};

export default MyReview;
