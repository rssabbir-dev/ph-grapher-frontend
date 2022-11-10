import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { serverURL } from '../../routes/router';

const ProviderLogin = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from?.pathname || '/';
	const { providerLogin } = useContext(AuthContext);
	const handleGoogleLogin = () => {
		const provider = new GoogleAuthProvider();
		providerLogin(provider)
			.then((res) => {
				const user = res.user;
				toast.success('Login Success');
				handleJwtToken(user);
				navigate(from, { replace: true });
			})
			.catch((err) => toast.error(err.message));
	};
	const handleJwtToken = async (user) => {
		const currentUser = { uid: user?.uid };
		const response = await fetch(`${serverURL}/jwt`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(currentUser),
		});
		const data = await response.json();
		document.cookie = 'ph-token=' + data.token;
	};
	return (
		<div className='flex justify-center'>
			<button
				onClick={handleGoogleLogin}
				className='btn btn-ghost flex justify-center items-center gap-3 border border-gray-300 shadow'
			>
				<FontAwesomeIcon
					className='text-xl font-bold text-blue'
					icon={faGoogle}
				/>
				<span>Continue With Google</span>
			</button>
		</div>
	);
};

export default ProviderLogin;
