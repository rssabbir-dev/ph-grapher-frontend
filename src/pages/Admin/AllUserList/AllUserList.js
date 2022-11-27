import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { siteName } from '../../../App';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { serverURL } from '../../../routes/router';
import Spinner from '../../shared/Spinner/Spinner';

const AllUserList = () => {
	const { user } = useContext(AuthContext);
	const {
		data: users,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['users'],
		queryFn: async () => {
			const res = await fetch(`${serverURL}/users`, {
				headers: {
					authorization: `Bearer ${document.cookie.split('=')[1]}`,
				},
			});
			const data = await res.json();
			return data;
		},
	});
	if (isLoading) {
		return <Spinner />;
	}
	const handleMakeAdmin = (_id) => {
		fetch(`${serverURL}/user/admin/${_id}`, {
			method: 'PATCH',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ uid: user.uid }),
		})
			.then((res) => res.json())
			.then((data) => {
				refetch();
			});
	};
	return (
		<HelmetProvider>
			<section className=''>
				<Helmet>
					<title>All User - Admin Dashboard - {siteName}</title>
				</Helmet>
				<div className='mx-auto w-11/12'>
					<h1 className='text-3xl uppercase font-light'>
						Manage All User
					</h1>
					<p className='text-sm uppercase'>
						You can simply post your services on my site.
					</p>
					<div className='divider'></div>
					<table className='table w-full'>
						<thead>
							<tr>
								<th></th>
								<th></th>
								<th>Name</th>
								<th>Email</th>
								<th>Admin</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user, i) => (
								<tr key={user._id}>
									<th>{i + 1}</th>
									<td>
										<div className='avatar'>
											<div className='w-16 rounded-full'>
												<img
													src={user.photoURL}
													alt=''
												/>
											</div>
										</div>
									</td>
									<td>{user.displayName}</td>
									<td>{user.email}</td>
									<td>
										{user?.role !== 'admin' && (
											<button
												onClick={() =>
													handleMakeAdmin(user._id)
												}
												className='btn btn-xs btn-primary'
											>
												Make Admin
											</button>
										)}
									</td>
									<td>
										<button className='btn btn-xs btn-danger'>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		</HelmetProvider>
	);
};

export default AllUserList;
