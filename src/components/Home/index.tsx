import React from 'react';
import './style.css';

interface Props {
	data: any;
}

const Home: React.FC<Props> = ({ data }) => {
	return (
		<div className='body'>
			<div className='home-section'>
				<div className='property-description'>
					<p>{data.description}</p>
				</div>
			</div>

			<div className='home-image-break' style={{ backgroundImage: `url('./assets/images/image-2.jpg')` }} />

			<div className='home-section'>
				<div className='property-details'>
					<div className='detail'>
						<h1>{data.price}</h1>
						<h4>List Price</h4>
					</div>

					<div className='detail'>
						<h1>{data.beds}</h1>
						<h4>Beds</h4>
					</div>

					<div className='detail'>
						<h1>{data.baths}</h1>
						<h4>Baths</h4>
					</div>

					<div className='detail'>
						<h1>{data.sqft}</h1>
						<h4>Square Feet</h4>
					</div>
				</div>
			</div>

			<div className='home-image-break' style={{ backgroundImage: `url('./assets/images/image-3.jpg')` }} />

			<div className='home-section'>
				<div className='property-features'>
					<img className='features-image' src='./assets/images/image-4.jpg' alt='property' />

					<div className='features'>
						{data.features.map((feature: string, i: number) => {
							if (i <= data.features.length / 2 - 1) {
								return <p key={i}>{feature}</p>;
							} else {
								return '';
							}
						})}
					</div>
				</div>

				<div className='property-features'>
					<div className='features'>
						{data.features.map((feature: string, i: number) => {
							if (i > data.features.length / 2 - 1) {
								return <p key={i}>{feature}</p>;
							} else {
								return '';
							}
						})}
					</div>

					<img className='features-image' src='./assets/images/image-5.jpg' alt='property' />
				</div>
			</div>

			<div className='brokerage-funnel'>
				<div className='brokerage-details'>
					<img className='brokerage-logo' src='./assets/logos/logo-light.png' alt='brokerage logo' />
					<h3>{data.copy}</h3>
					<a href={data.url} target='_blank' rel='noreferrer'>
						<button className='button-light'>Learn More</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
