import { useState } from 'react';
import styles from './painting-horizontal-carrousel.module.scss';

export interface PaintingHorizontalCarrousel {
	pictures: any;
}

function PaintingHorizontalCarrousel({
	pictures,
}: PaintingHorizontalCarrousel) {
	const [pictureIndex, setPictureIndex] = useState(0);

	const nextPicture = (value: number) => {
		const newIndex = pictureIndex + value;
		const picturesLength = pictures.length;
		console.log(picturesLength);
		setPictureIndex(() => {
			if (newIndex < 0) {
				return picturesLength - 1;
			} else if (newIndex >= picturesLength) {
				return 0;
			} else {
				return newIndex;
			}
		});
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.arrow} onClick={() => nextPicture(-1)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="size-8"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 19.5 8.25 12l7.5-7.5"
					/>
				</svg>
			</div>
			<div
				style={{ backgroundImage: `url(${pictures[pictureIndex]})` }}
				className={styles.image}
			/>
			<div className={styles.arrow} onClick={() => nextPicture(1)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="size-8"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m8.25 4.5 7.5 7.5-7.5 7.5"
					/>
				</svg>
			</div>
		</div>
	);
}

export default PaintingHorizontalCarrousel;
