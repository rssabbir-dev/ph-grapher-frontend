import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import { serverURL } from '../routes/router';

const useAdmin = () => {
	const { user } = useContext(AuthContext);
	const [isAdmin, setIsAdmin] = useState(false);
	const [isAdminLoading, setIsAdminLoading] = useState(true);

	useEffect(() => {
		if (user?.uid) {
			fetch(`${serverURL}/user/admin/${user?.uid}`, {
				headers: {
					authorization: `Bearer ${document.cookie.split('=')[1]}`,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					setIsAdmin(data.isAdmin);
					setIsAdminLoading(false);
				});
		}
	}, [user?.uid]);

	return [isAdmin, isAdminLoading];
};
export default useAdmin;
