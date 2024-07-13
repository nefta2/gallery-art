import { useState } from 'react';
import styles from './painting-carrousel.module.scss';

export interface PaintingCarrouselProps {
	options: { url: string; name: string }[];
	onOptionClick: (url: string) => void;
}

function PaintingCarrousel({ options, onOptionClick }: PaintingCarrouselProps) {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleClick = (index: number) => {
		setSelectedIndex(selectedIndex === index ? -1 : index);
		onOptionClick(options[index].url);
	};

	return (
		<div className={styles.mainDiv}>
			{options.map((x, index) => (
				<div
					key={index}
					className={styles.singleDiv}
					onClick={() => handleClick(index)}
					style={{
						backgroundColor: selectedIndex === index ? '#f2f2f2' : '',
						color: selectedIndex === index ? '#1b1b1b' : '',
					}}
				>
					{x.name}
				</div>
			))}
		</div>
	);
}

export default PaintingCarrousel;
