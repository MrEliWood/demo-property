import React from 'react';
import './style.css';

interface Props {
	data: any;
}

const Footer: React.FC<Props> = ({ data }) => {
	return (
		<footer>
			<div className='footer-section'>
				<div className='-footer-contact-details'>
					<h1>Get in Touch</h1>
					<a href={'tel:' + data.phone} target='_blank' rel='noreferrer'>
						<h4>{`(${data.phone.slice(0, 3)}) ${data.phone.slice(3, 6)}-${data.phone.slice(6, 10)}`}</h4>
					</a>
					<a href={data.email} target='_blank' rel='noreferrer'>
						<h4>{data.email}</h4>
					</a>
					<a href={data.url} target='_blank' rel='noreferrer'>
						<h4>{data.url}</h4>
					</a>
				</div>

				<form className='footer-contact-form'>
					<div className='fcf-name'>
						<div className='form-item'>
							<label htmlFor='first-name'>First Name</label>
							<input type='text' name='first-name' />
						</div>

						<div className='form-item'>
							<label htmlFor='last-name'>Last Name</label>
							<input type='text' name='last-name' />
						</div>
					</div>

					<div className='fcf-phone'>
						<div className='form-item'>
							<input type='text' name='phone-area' />
							<input type='text' name='phone-three' />
							<input type='text' name='phone-four' />
						</div>
					</div>
					<input type='text' name='email' />
					<input type='text' name='message' />
				</form>
			</div>

			<div className='footer-section'></div>
		</footer>
	);
};

export default Footer;
