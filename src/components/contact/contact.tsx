import { useEffect, useState } from 'react';
import styles from './contact.module.scss';

function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [errors, setErrors] = useState({
		email: '',
	});

	const validateEmail = (email: any) => {
		const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		return re.test(String(email).toLowerCase());
	};

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (!validateEmail(formData.email)) {
			setErrors({ ...errors, email: 'Invalid email address' });
			return;
		}

		fetch('/send-email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Email sent successfully:', data);
			})
			.catch((error) => {
				console.error('Error sending email:', error);
			});
	};
	useEffect(() => {
		console.log(errors);
	}, [errors]);

	return (
		<div style={{ margin: '0px 30px', height: '100%' }}>
			<div className={styles.root}>
				<div className={styles.leftDiv}>
					<div className={styles.mainTitle}>Let's get in touch.</div>
					<form onSubmit={handleSubmit} className={styles.form}>
						<div
							style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
						>
							<div className={styles.topInputs}>
								<div className={styles.inputs}>
									<label htmlFor="name">Your name</label>
									<input
										id="name"
										type="text"
										name="name"
										placeholder="Name"
										value={formData.name}
										onChange={handleChange}
										className={styles.input}
									/>
								</div>
								<div className={styles.inputs}>
									<label htmlFor="email">Your email</label>
									<input
										type="email"
										name="email"
										placeholder="Email"
										value={formData.email}
										onChange={handleChange}
										className={styles.input}
									/>
									{errors.email && (
										<p className={styles.error}>*Add a valid email</p>
									)}
								</div>
							</div>
							<div className={styles.inputs}>
								<label htmlFor="message">
									Ask me anything and I will get back to you
								</label>
								<textarea
									name="message"
									placeholder="Message"
									value={formData.message}
									onChange={handleChange}
									className={styles.input}
								/>
							</div>
						</div>
						<button type="submit" className={styles.button}>
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
