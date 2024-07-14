import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import styles from './App.module.scss';
import AboutArtist from './components/about-artist/about-artist';
import Works from './components/works/works';
import Contact from './components/contact/contact';
import PaintingDetails from './components/painting-details/painting-details';
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

function App() {
	const location = window.location.pathname;
	const isHomeActive = location === '/';
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					'https://ikwz6ei55h7nswmbybz6s2p75y0ppocy.lambda-url.us-west-2.on.aws'
				);
				setData(response.data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		console.log('Data:', data);
	}, [data]);

	const carrouselOptions =
		useMemo(() => {
			return data.map((item) => {
				//@ts-expect-error
				const mainPicture = item.pictures.find((picture: any) => picture.main);
				return {
					url: mainPicture ? mainPicture.url : '',
					//@ts-expect-error
					name: item.painting.title,
				};
			});
		}, [data]) || null;

	useEffect(() => {
		console.log('carrouselOptions:', carrouselOptions);
	}, [carrouselOptions]);

	return (
		<>
			<BrowserRouter>
				<Navbar />
				<div
					className={`${styles['main-page-wrapper']}  ${styles['pageWithSideBar']}`}
					style={{ background: isHomeActive ? '#f2f2f2' : '#f2f2f2' }}
				>
					<Routes>
						<Route
							path="/"
							element={<Home carrouselOptions={carrouselOptions} />}
						/>
						<Route path="/about-artist" element={<AboutArtist />} />
						<Route path="/works" element={<Works data={data} />} />
						<Route
							path="/works/:path"
							element={<PaintingDetails paintings={data} />}
						/>
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
