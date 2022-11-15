import React, { useState } from 'react';
import './style.css';

interface Props {
	data: any;
}

const Footer: React.FC<Props> = ({ data }) => {
	// set default state
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phoneArea, setPhoneArea] = useState('');
	const [phoneThree, setPhoneThree] = useState('');
	const [phoneFour, setPhoneFour] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	// get elements from the page for autofocus
	const phoneThreeElement = document.getElementById('footer-phone-three');
	const phoneFourElement = document.getElementById('footer-phone-four');
	const emailElement = document.getElementById('footer-email');

	// regex to test for numbers and valid emails
	const numberTest = /^[0-9]+$/;
	const emailTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	// handle contact form input
	const handleInputChange = (e: any) => {
		console.log(e);
		e.preventDefault();

		switch (e.target.name) {
			case 'first-name':
				setFirstName(e.target.value);
				break;
			case 'last-name':
				setLastName(e.target.value);
				break;
			case 'phone-area':
				// focus next field after 3 characters
				if (phoneArea.length === 2 && e.target.value.match(numberTest) && e.nativeEvent.inputType !== 'deleteContentBackward') {
					setPhoneArea(e.target.value);
					phoneThreeElement?.focus();
					// only allow delete after 3 characters
				} else if (phoneArea.length === 3 && e.nativeEvent.inputType === 'deleteContentBackward') {
					setPhoneArea(e.target.value);
				} else if (phoneArea.length === 3) {
					return;
				} else if (e.target.value.match(numberTest) || e.nativeEvent.inputType === 'deleteContentBackward') {
					setPhoneArea(e.target.value);
				}
				break;
			case 'phone-three':
				// focus next field after 3 characters
				if (phoneThree.length === 2 && e.target.value.match(numberTest) && e.nativeEvent.inputType !== 'deleteContentBackward') {
					setPhoneThree(e.target.value);
					phoneFourElement?.focus();
					// only allow delete after 3 characters
				} else if (phoneThree.length === 3 && e.nativeEvent.inputType === 'deleteContentBackward') {
					setPhoneThree(e.target.value);
				} else if (phoneThree.length === 3) {
					return;
				} else if (e.target.value.match(numberTest) || e.nativeEvent.inputType === 'deleteContentBackward') {
					setPhoneThree(e.target.value);
				}
				break;
			case 'phone-four':
				// focus next field after 3 characters
				if (phoneFour.length === 3 && e.target.value.match(numberTest) && e.nativeEvent.inputType !== 'deleteContentBackward') {
					setPhoneFour(e.target.value);
					emailElement?.focus();
					// only allow delete after 3 characters
				} else if (phoneFour.length === 4 && e.nativeEvent.inputType === 'deleteContentBackward') {
					setPhoneFour(e.target.value);
				} else if (phoneFour.length === 4) {
					return;
				} else if (e.target.value.match(numberTest) || e.nativeEvent.inputType === 'deleteContentBackward') {
					setPhoneFour(e.target.value);
				}
				break;
			case 'email':
				setEmail(e.target.value);
				break;
			case 'message':
				setMessage(e.target.value);
				break;
			default:
				break;
		}
	};

	// handle form submit
	const handleFormSubmit = (e: any) => {
		e.preventDefault();

		// check for valid name entry
		if (!firstName) {
			alert('Please enter your first name.');

			// check for valid phone or email
		} else if ((phoneArea.length < 3 || phoneThree.length < 3 || phoneFour.length < 4) && !email) {
			alert('Please enter a valid phone number or email address.');

			// check for valid email
		} else if (email && !email.match(emailTest)) {
			alert('Please enter a valid email address.');

			// check for message conent
		} else if (!message) {
			alert('Please write a brief message about how we can help so we know who the best person is to follow up with you.');

			// confirm submission and reset inputs
		} else {
			alert('Thank you for reaching out! Someone will follow up with you as soon as possible.');
			setFirstName('');
			setLastName('');
			setPhoneArea('');
			setPhoneThree('');
			setPhoneFour('');
			setEmail('');
			setMessage('');
		}
	};

	return (
		<footer>
			<div className='footer-section'>
				<div className='footer-contact-details'>
					<h1>Get in Touch</h1>

					<div className='footer-contact-details-section'>
						<a href={'tel:' + data.phone} target='_blank' rel='noreferrer'>
							<h4>{`(${data.phone.slice(0, 3)}) ${data.phone.slice(3, 6)}-${data.phone.slice(6, 10)}`}</h4>
						</a>

						<a href={data.email} target='_blank' rel='noreferrer'>
							<h4>{data.email}</h4>
						</a>
					</div>

					<a href={data.url} target='_blank' rel='noreferrer'>
						<h4>{data.url}</h4>
					</a>
				</div>

				<form className='footer-contact-form'>
					<div className='form-section'>
						<div className='form-line'>
							<div className='form-item'>
								<p>First Name</p>
								<input className='first-name' value={firstName} type='text' name='first-name' onChange={handleInputChange} />
							</div>

							<div className='form-item'>
								<p>Last Name</p>
								<input className='last-name' value={lastName} type='text' name='last-name' onChange={handleInputChange} />
							</div>
						</div>

						<div className='form-line'>
							<div className='form-item'>
								<p>Phone</p>
								<div className='form-phone'>
									<input id='footer-phone-area' className='phone-three' value={phoneArea} type='tel' name='phone-area' onChange={handleInputChange} />
									<input id='footer-phone-three' className='phone-three' value={phoneThree} type='tel' name='phone-three' onChange={handleInputChange} />
									<input id='footer-phone-four' className='phone-four' value={phoneFour} type='tel' name='phone-four' onChange={handleInputChange} />
								</div>
							</div>
						</div>

						<div className='form-line'>
							<div className='form-item'>
								<p>Email</p>
								<input id='footer-email' className='email' value={email} type='text' name='email' onChange={handleInputChange} />
							</div>
						</div>

						<div className='form-line'>
							<div className='form-item'>
								<p>Message</p>
								<textarea className='message' value={message} name='message' onChange={handleInputChange} />
							</div>
						</div>
					</div>

					<button className='button-dark' onClick={handleFormSubmit}>
						Send
					</button>
				</form>
			</div>

			<div className='footer-section'>
				<div className='footer-branding'>
					<a href={data.url} target='_blank' rel='noreferrer'>
						<img className='brokerage-logo' src='./assets/logos/logo-dark.png' alt='Listing agent logo' />
					</a>
					<p className='legal-copy'>{data.disclaimer}</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
