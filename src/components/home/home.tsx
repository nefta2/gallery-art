import { useState } from 'react';
import styles from './home.module.scss';
import OwnButton from '../own-button/own-button';
import PaintingCarrousel from '../painting-carrousel/painting-carrousel';

export interface Picture {
	url: string;
	main: boolean;
}

export interface HomeProps {
	carrouselOptions: any;
}

function Home({ carrouselOptions }: HomeProps) {
	const [backgroundPaint, setBackgroundPaint] = useState(
		'https://art-gallery-alfonso-burgos-images.s3.us-west-2.amazonaws.com/boat-painting/boat-main.jpg'
	);

	return (
		<div
			className={styles.root}
			style={{
				backgroundImage: `url(${backgroundPaint})`,
			}}
		>
			<div className={styles.leftDiv}>
				{carrouselOptions && (
					<PaintingCarrousel
						options={carrouselOptions}
						onOptionClick={setBackgroundPaint}
					/>
				)}
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
