import { createBrowserRouter } from 'react-router-dom';
import ForAuth from '../layout/ForAuth';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/LoginManager/Login';
import Registration from '../pages/LoginManager/Registration';
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails';
import Services from '../pages/Services/Services';

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
