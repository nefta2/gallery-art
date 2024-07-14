import { useParams } from 'react-router-dom';
import styles from './painting-details.module.scss';
import PaintingHorizontalCarrousel from '../painting-horizontal-carrousel/painting-horizontal-carrousel';
import OwnButton from '../own-button/own-button';

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
