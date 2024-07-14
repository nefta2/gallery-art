import { useParams } from 'react-router-dom';
import styles from './painting-details.module.scss';
import PaintingHorizontalCarrousel from '../painting-horizontal-carrousel/painting-horizontal-carrousel';
import OwnButton from '../own-button/own-button';

const paintings = [
	{
		url: [
			'/src/assets/flamingos-painting/flamingos-front-view.jpeg',
			'/src/assets/flamingos-painting/flamingos-2.jpg',
			'/src/assets/flamingos-painting/flamingos-3.jpg',
		],
		title: 'Flamingos 2022',
		width: '100',
		height: '80',
		depth: '15',
		technique: 'Oil',
		path: 'flamingos-2022',
	},
	{
		url: [
			'/src/assets/flamingos-2-painting/flamingos-2-main.jpg',
			'/src/assets/flamingos-2-painting/flamingos-2-1.jpg',
		],
		title: 'Flamingos in Paris 2018',
		width: '35',
		height: '45',
		depth: '20',
		technique: 'Oil',
		path: 'flamingos-paris-2018',
	},
	{
		url: [
			'/src/assets/boat-painting/boat-main.jpg',
			'/src/assets/boat-painting/boat-1.jpg',
		],
		title: 'La Costa',
		width: '100',
		height: '80',
		depth: '15',
		technique: 'Oil',
		path: 'la-costa',
	},
];
export interface PaintingDetailsProps {
	paintings: any;
}
function PaintingDetails({ paintings }: PaintingDetailsProps) {
	const { path } = useParams();
	console.log(paintings);
	const paintingData = paintings.find((x: any) => x.painting.path === path);
	console.log('Painting data', paintingData);
	if (!paintingData) {
		return <div>Painting not found</div>;
	}

	return (
		<div style={{ margin: '0px 70px', height: '100%' }}>
			<div className={styles.root}>
				<PaintingHorizontalCarrousel
					pictures={paintingData.pictures.map((picture: any) => picture.url)}
				/>
				<div className={styles.rightDiv}>
					<div className={styles.mainTitle}>{paintingData.painting.title}</div>
					<div className={styles.secondDiv}>
						<div className={styles.paintDetails}>
							<div>
								<div>Height: {paintingData.painting.height} cm</div>
								<div>Width: {paintingData.painting.width} cm</div>
								<div>Depth: {paintingData.painting.depth} mm</div>
								<div>Technique: {paintingData.painting.technique}</div>
							</div>
							<div>
								<OwnButton
									title={'Contact me'}
									colorChosen={'#F2F2F2'}
									backgroundColorChosen={'#1B1B1B'}
									link={`/contact`}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PaintingDetails;
