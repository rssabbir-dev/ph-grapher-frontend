import { createBrowserRouter } from 'react-router-dom';
import ForAuth from '../layout/ForAuth';
import Main from '../layout/Main';
import Account from '../pages/Account/Account';
import AddService from '../pages/AddService/AddService';
import Blogs from '../pages/Blogs/Blogs';
import Home from '../pages/Home/Home';
import Login from '../pages/LoginManager/Login';
import Registration from '../pages/LoginManager/Registration';
import MyReview from '../pages/MyReview/MyReview';
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails';
import Services from '../pages/Services/Services';
import PrivateRoute from './PrivateRoute';

// export const serverURL = 'https://ph-grapher-backend.vercel.app';
export const serverURL = 'http://localhost:5000';
export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/service/:id',
				element: <ServiceDetails />,
			},
			{
				path: '/services',
				element: <Services />,
			},
			{
				path: '/blogs',
				element: <Blogs />,
			},
			{
				path: '/add-service',
				element: (
					<PrivateRoute>
						<AddService />
					</PrivateRoute>
				),
			},
			{
				path: '/my-review',
				element: (
					<PrivateRoute>
						<MyReview />
					</PrivateRoute>
				),
			},
			{
				path: '/account',
				element: (
					<PrivateRoute>
						<Account />
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: '/login',
		element: <ForAuth />,
		children: [
			{
				path: '/login',
				element: <Login />,
			},
		],
	},
	{
		path: '/registration',
		element: <ForAuth />,
		children: [
			{
				path: '/registration',
				element: <Registration />,
			},
		],
	},
]);
