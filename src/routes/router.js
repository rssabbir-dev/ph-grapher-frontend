import { createBrowserRouter } from 'react-router-dom';
import ForAuth from '../layout/ForAuth';
import Main from '../layout/Main';
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
				path: '/my-review',
				element: (
					<PrivateRoute>
						<MyReview />
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
