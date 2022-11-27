import { createBrowserRouter } from 'react-router-dom';
import AdminLayout from '../layout/AdminLayout';
import ForAuth from '../layout/ForAuth';
import Main from '../layout/Main';
import Account from '../pages/Account/Account';
import AddService from '../pages/Admin/AddService/AddService';
import AllUserList from '../pages/Admin/AllUserList/AllUserList';
import Blogs from '../pages/Blogs/Blogs';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Login from '../pages/LoginManager/Login';
import Registration from '../pages/LoginManager/Registration';
import MyReview from '../pages/MyReview/MyReview';
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails';
import Services from '../pages/Services/Services';
import AdminRoute from './AdminRoute';
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
			{
				path: '*',
				element: <ErrorPage />,
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
	{
		path: '/admin',
		element: (
			<PrivateRoute>
				<AdminLayout />
			</PrivateRoute>
		),
		children: [
			{
				path: '/admin',
				element: (
					<AdminRoute>
						<AllUserList />
					</AdminRoute>
				),
			},
			{
				path: '/admin/add-service',
				element: (
					<AdminRoute>
						<AddService />
					</AdminRoute>
				),
			},
		],
	},
]);
