import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.config';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const updateUserProfile = (profileData) => {
		return updateProfile(auth.currentUser, { profileData });
	};
	const loginUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const providerLogin = (provider) => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);
	const authInfo = {
		user,
		loading,
		setLoading,
		createUser,
		updateUserProfile,
		loginUser,
		providerLogin,
		logOut,
	};
	return (
		<>
			<AuthContext.Provider value={authInfo}>
				{children}
			</AuthContext.Provider>
		</>
	);
};

export default AuthProvider;
