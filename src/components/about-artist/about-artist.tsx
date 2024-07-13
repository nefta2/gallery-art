import styles from './about-artist.module.scss';
import OwnButton from '../own-button/own-button';

function AboutArtist() {
	const workAura = [
		'/src/assets/about-artist/work-aura-1.jpeg',
		'/src/assets/about-artist/work-aura-2.jpeg',
		'/src/assets/about-artist/work-aura-3.jpeg',
	];
	return (
		<div style={{ margin: '0px 30px', height: '100%' }}>
			<div className={styles.root}>
				<div className={styles.leftDiv}>
					<div className={styles.mainTitle}>Alfonso Burgos</div>
					<div className={styles.secondDiv}>
						<div className={styles.artistDescription}>
							<div>
								My work begins with a sensory intuition of the colors to paint,
								followed by the selection of the elements that will be the
								protagonists of the work, which I extract from nature. I like to
								paint flamingos, they are my favorites, since their colors
								remind me of the joy of a summer day. I also paint herons
								immersed in the swamps surrounded by wild vegetation that always
								hides surprising elements and that are a source of my
								inspiration.{' '}
							</div>
						</div>
						<OwnButton
							title={'Contact Me'}
							colorChosen={'#F2F2F2'}
							backgroundColorChosen={' #1B1B1B'}
							link={'/contact'}
						/>
					</div>
				</div>
				<div className={styles.artistDiv} />
			</div>
			<div className={styles.root2}>
				<div className={styles.mainTitle}>Work Aura</div>
				<div className={styles.pictures}>
					{workAura.map((x: any) => (
						<div
							className={styles.workAuraDiv}
							style={{ backgroundImage: `url(${x})` }}
						/>
					))}
				</div>
				<div style={{ fontSize: '40px' }}>
					"The art of living in eternal summmer"
				</div>
			</div>
		</div>
	);
}

export default AboutArtist;
