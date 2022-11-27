import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Spinner from '../pages/shared/Spinner/Spinner';

const AdminRoute = ({ children }) => {
	const { loading } = useContext(AuthContext);
	const [isAdmin, isAdminLoading] = useAdmin();
	const location = useLocation();

	if (loading || isAdminLoading) {
		return <Spinner />;
	}

	if (isAdmin) {
		return children;
	} else {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}
};

export default AdminRoute;
