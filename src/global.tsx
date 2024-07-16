import React from 'react';
import useRouteLogger from './components/useRouterLogger';
import styles from './global.module.scss';

const Global = ({ children }: { children: React.ReactNode }) => {
	useRouteLogger();
	const location = window.location.pathname;
	const isHomeActive = location === '/';
	return (
		<div
			className={`${styles['main-page-wrapper']}  ${styles['pageWithSideBar']}`}
			style={{ background: isHomeActive ? '#f2f2f2' : '#f2f2f2' }}
		>
			{children}
		</div>
	);
};

export default Global;
