import { createBrowserRouter } from 'react-router-dom';
import ForAuth from '../layout/ForAuth';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/LoginManager/Login';
import Registration from '../pages/LoginManager/Registration';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
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
