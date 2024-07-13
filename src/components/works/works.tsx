import OwnButton from '../own-button/own-button';
import styles from './works.module.scss';

function Works() {
	const paintings = [
		{
			url: '/src/assets/flamingos-painting/flamingos-front-view.jpeg',
			title: 'Flamingos 2022',
			width: '100',
			height: '80',
			depth: '15',
			technique: 'Oil',
			path: 'flamingos-2022',
		},
		{
			url: '/src/assets/flamingos-2-painting/flamingos-2-main.jpg',
			title: 'Flamingos in Paris 2018',
			width: '35',
			height: '45',
			depth: '20',
			technique: 'Oil',
			path: 'flamingos-paris-2018',
		},
		{
			url: '/src/assets/boat-painting/boat-main.jpg',
			title: 'La Costa',
			width: '100',
			height: '80',
			depth: '15',
			technique: 'Oil',
			path: 'la-costa',
		},
	];

	return (
		<div style={{ margin: '0px 30px', height: '100%' }}>
			<div className={styles.root}>
				<div className={styles.leftDiv}>
					<div className={styles.mainTitle}>Paintings</div>
				</div>
				<div className={styles.paintContainer}>
					{paintings.map((x) => (
						<div key={x.title} className={styles.paintItem}>
							<div
								style={{ backgroundImage: `url(${x.url})` }}
								className={styles.pictures}
							/>
							<div className={styles.paintTitle}>{x.title}</div>
							<OwnButton
								title={'See more'}
								colorChosen={'#1B1B1B'}
								backgroundColorChosen={''}
								borderChosen={'solid 2px #1B1B1B'}
								link={`/works/${x.path}`}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Works;
