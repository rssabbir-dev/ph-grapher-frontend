import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import Header from '../pages/shared/Header/Header';


//Scroll TO top of the page when route got changed
	export const useScrollToTop = () => {
		const { pathname } = useLocation();

		useEffect(() => {
			window.scrollTo(0, 0);
		}, [pathname]);
		return null;
	};
const Main = () => {
	

	useScrollToTop();
	return (
		<div>
			<Header />
			<div>
				<Outlet />
				<Footer />
			</div>
		</div>
	);
};

export default Main;
