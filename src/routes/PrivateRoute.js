import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import Spinner from '../pages/shared/Spinner/Spinner';

const PrivateRoute = ({ children }) => {
	const location = useLocation();
	const { user, loading } = useContext(AuthContext);
	if (loading) {
		return <Spinner />;
	}
	if (!user?.uid) {
		return (
			<Navigate to='/login' state={{ from: location }} replace></Navigate>
		);
	}
	return children;
};

export default PrivateRoute;
