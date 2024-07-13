//import React from 'react';
import styles from './own-button.module.scss';
import { NavLink } from 'react-router-dom';

export interface OwnButtonProps {
	title: String;
	colorChosen: String;
	backgroundColorChosen: String;
	link: any;
	borderChosen?: String;
}

function OwnButton({
	title,
	colorChosen,
	backgroundColorChosen,
	link,
	borderChosen,
}: OwnButtonProps) {
	return (
		<NavLink to={link}>
			<div className={styles.buttonDiv}>
				<div
					style={{
						//@ts-expect-error
						color: colorChosen,
						//@ts-expect-error
						background: backgroundColorChosen,
						//@ts-expect-error
						border: borderChosen,
					}}
					className={styles.button}
				>
					{title}
				</div>
			</div>
		</NavLink>
	);
}

export default OwnButton;
