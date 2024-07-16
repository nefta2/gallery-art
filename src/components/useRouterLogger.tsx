import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const sendRouteToBackend = async (route: any) => {
	try {
		await fetch(
			'https://7um967j0vk.execute-api.us-west-2.amazonaws.com/default/AddActionUser',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ Actions: [route] }),
			}
		);
	} catch (error) {
		console.error('Error sending route to backend:', error);
	}
};

const useRouteLogger = () => {
	const location = useLocation();

	useEffect(() => {
		// Log the new route
		console.log('Route changed to:', location.pathname);

		// Send the route information to your backend
		sendRouteToBackend(location.pathname);
	}, [location]);
};

export default useRouteLogger;
