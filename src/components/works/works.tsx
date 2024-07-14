import OwnButton from '../own-button/own-button';
import styles from './works.module.scss';
interface Works {
	data: any;
}
function Works({ data }: Works) {
	const paintings = data;

	return (
		<div style={{ margin: '0px 30px', height: '100%' }}>
			<div className={styles.root}>
				<div className={styles.leftDiv}>
					<div className={styles.mainTitle}>Paintings</div>
				</div>
				<div className={styles.paintContainer}>
					{paintings.map((x: any) => {
						const mainPicture =
							x.pictures.find((picture: any) => picture.main) || x.pictures[0];

						return (
							<div key={x.title} className={styles.paintItem}>
								<div
									style={{ backgroundImage: `url(${mainPicture.url})` }}
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
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Works;
