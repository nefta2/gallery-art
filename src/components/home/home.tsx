import { useState } from 'react';
import styles from './home.module.scss';
import OwnButton from '../own-button/own-button';
import PaintingCarrousel from '../painting-carrousel/painting-carrousel';
function Home() {
	const [backgroundPaint, setBackgroundPaint] = useState(
		'/src/assets/flamingos-painting/flamingos-front-view.jpeg'
	);
	const carrouselOptions = [
		{
			url: '/src/assets/flamingos-painting/flamingos-front-view.jpeg',
			name: 'Flamingos',
		},
		{
			url: '/src/assets/flamingos-2-painting/flamingos-2-main.jpg',
			name: 'Flamingos 2',
		},
		{
			url: '/src/assets/boat-painting/boat-main.jpg',
			name: 'La Costa',
		},
	];
	return (
		<div
			className={styles.root}
			style={{
				backgroundImage: `url(${backgroundPaint})`,
			}}
		>
			<div className={styles.leftDiv}>
				<PaintingCarrousel
					options={carrouselOptions}
					onOptionClick={setBackgroundPaint}
				/>
			</div>
			<div className={styles.centerDiv}>
				<div className={styles.mainTitle}>Art Gallery</div>
				<div className={styles.secondDiv}>
					<div className={styles.secondTitle}>
						<div>By:</div>
						<div>Alfonso Burgos</div>
					</div>
					<OwnButton
						title={'See Works'}
						colorChosen={'#1B1B1B'}
						backgroundColorChosen={'#F2F2F2'}
						link={'/works'}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
