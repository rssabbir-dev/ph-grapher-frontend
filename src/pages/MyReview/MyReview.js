import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { serverURL } from '../../routes/router';
import MyReviewItem from './MyReviewItem';

const MyReview = () => {
	const [reviews, setReviews] = useState([]);
	const [count, setCount] = useState(0);
	const { user, logOut } = useContext(AuthContext);
	const [reloadData, setReloadData] = useState(0);
	const navigate = useNavigate();
	useEffect(() => {
		fetch(`${serverURL}/my-review?uid=${user?.uid}`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem('ph-token')}`,
			},
		})
			.then((res) => {
				if (res.status === 401 || res.status === 403) {
					return logOut().then(() => {
						toast.error('Session Expired, Login Again');
						localStorage.removeItem('ph-token');
						navigate('/login');
					});
				}
				return res.json();
			})
			.then((data) => {
				setReviews(data.reviews);
				setCount(data.count);
			});
	}, [logOut, navigate, user?.uid, reloadData]);

	const handleDelete = (id) => {
		// Swal.fire('Good job!', 'You clicked the button!', 'success');
		Swal.fire({
			title: 'Are you sure?',
			text: 'It will permanently deleted !',
			icon: 'error',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				fetch(
					`${serverURL}/my-review-delete?id=${id}&uid=${user?.uid}`,
					{
						method: 'DELETE',
						headers: {
							authorization: `Bearer ${localStorage.getItem(
								'ph-token'
							)}`,
						},
					}
				)
					.then((res) => {
						if (res.status === 401 || res.status === 403) {
							return logOut().then(() => {
								toast.error('Session Expired, Login Again');
								localStorage.removeItem('ph-token');
								navigate('/login');
							});
						}
						return res.json();
					})
					.then((data) => {
						if (data.deletedCount > 0) {
							setReloadData(reloadData + 1);
							Swal.fire({
								title: 'Deleted!?',
								text: 'Your Review has been deleted. !',
								icon: 'success',
								showCancelButton: false,
								cancelButtonColor: '#d33',
							});
						}
					});
			}
		});
	};
	const handleUpdate = (id) => {
		fetch(`${serverURL}/my-review-update/${id}`, {});
	};
	return (
		<div className='w-11/12 mx-auto'>
			<h2 className='text-3xl uppercase font-light'>
				You reviewed {count} service
			</h2>
			<div className='divider'></div>
			<div className='grid gap-10 '>
				{count ? (
					<div>
						{reviews.map((review) => (
							<MyReviewItem
								handleDelete={handleDelete}
								handleUpdate={handleUpdate}
								review={review}
								key={review._id}
							/>
						))}
					</div>
				) : (
					<h2>You haven't write a review yet!</h2>
				)}
			</div>
		</div>
	);
};

export default MyReview;
