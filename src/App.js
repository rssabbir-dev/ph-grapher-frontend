import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import './App.css';
import { router } from './routes/router';
export const siteName = 'Ph_Grapher';
function App() {
	
	return (
		<div>
			<Toaster />
			<RouterProvider router={router} />
			<ScrollToTop
				style={{ backgroundColor: '#E21D48' }}
				color='white'
				className='flex justify-center items-center'
				smooth
			/>
		</div>
	);
}

export default App;
