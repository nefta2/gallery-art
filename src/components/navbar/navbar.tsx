import React from 'react';
import styles from './navbar.module.scss';
import { NavLink, useLocation } from 'react-router-dom';

interface Option {
	title: string;
	link: string;
}

const Navbar: React.FC = () => {
	const options: Option[] = [
		{ title: 'HOME', link: '' },
		{ title: 'ABOUT ARTIST', link: '/about-artist' },
		{ title: 'WORKS', link: '/works' },
		{ title: 'CONTACT', link: '/contact' },
	];
	const location = useLocation();
	const isHomeActive = location.pathname === '/';

	return (
		<div
			className={styles.navbar}
			style={{ backgroundColor: isHomeActive ? '' : '#F1F1F1' }}
		>
			{options.map((option) => (
				<NavLink
					key={option.link}
					to={option.link}
					className={({ isActive }: { isActive: boolean }) =>
						isActive ? styles.selected : styles.unselected
					}
					style={{
						color: isHomeActive ? 'white' : '#1b1b1b',
					}}
				>
					<div>{option.title}</div>
				</NavLink>
			))}
		</div>
	);
};

export default Navbar;
