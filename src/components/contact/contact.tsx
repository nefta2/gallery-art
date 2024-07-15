import styles from './contact.module.scss';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/16/solid';

function Contact() {
	return (
		<div style={{ margin: '0px 30px', height: '100%' }}>
			<div className={styles.root}>
				<div className={styles.leftDiv}>
					<div className={styles.mainTitle}>Let's get in touch.</div>
					<div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
						<PhoneIcon className="w-4 h-4" /> Phone number: 6572-7795
					</div>
					<div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
						{' '}
						<EnvelopeIcon className="w-4 h-4" />
						Email: alfonsoburgos17@yahoo.com
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
