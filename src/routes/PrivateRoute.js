import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
	const location = useLocation();
	const { user, loading } = useContext(AuthContext);
	if (loading) {
		return <h1 className='text-3xl'>Loading....</h1>;
	}
	if (!user?.uid) {
		return (
			<Navigate to='/login' state={{ from: location }} replace></Navigate>
		);
	}
	return children;
};

export default PrivateRoute;
