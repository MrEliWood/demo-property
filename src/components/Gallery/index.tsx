import React, { useState, useEffect } from 'react';
import './style.css';

interface Props {
	data: any;
}

const Gallery: React.FC<Props> = ({ data }) => {
	// set default state
	const [carousel, setCarousel] = useState(false);
	const [active, setActive] = useState(0);
	const [gridStyle, setGridStyle] = useState({ gap: '' });

	// initialize images array
	const images: string[] = [];

	for (let i = 1; i <= data.images; i++) {
		images.push(`./assets/images/image-${i}.jpg`);
	}

	// get gallery element from the page for autoscroll
	const galleryElement = document.getElementById('gallery');

	const handleImageSelect = (i: number) => {
		if (window.innerWidth > 768) {
			setCarousel(true);
			setActive(i);
			galleryElement?.scrollIntoView();
		}
	};

	// handle carousel navigation
	const handleArrowClick = (direction: string) => {
		const index = active;
		switch (direction) {
			case 'next':
				index === images.length - 1 ? setActive(0) : setActive(index + 1);
				break;
			case 'prev':
				index === 0 ? setActive(images.length - 1) : setActive(index - 1);
				break;
			default:
				setActive(0);
				break;
		}
	};

	// set grid style based on screen size
	const handleGridSize = () => {
		// desktop
		if (window.innerWidth > 1200) {
			const grid = window.innerWidth - 120;

			const style = {
				gap: `${grid * 0.02}px`
			};

			setGridStyle(style);

			// large screens
		} else if (window.innerWidth > 1024) {
			const grid = window.innerWidth - 60;

			const style = {
				gap: `${grid * 0.02}px`
			};

			setGridStyle(style);

			// small screens
		} else if (window.innerWidth > 768) {
			const grid = window.innerWidth - 30;

			const style = {
				gap: `${grid * 0.02}px`
			};

			setGridStyle(style);

			// tablets
		} else {
			const style = {
				gap: `15px`
			};

			setGridStyle(style);
		}
	};

	// listen for background video load
	useEffect(() => {
		handleGridSize();
		window.addEventListener('resize', handleGridSize);
		// eslint-disable-next-line
	}, []);

	return (
		<div id='gallery' className='gallery'>
			{carousel ? (
				<div className='gallery-carousel'>
					<svg className='close-carousel-button' viewBox='0 0 30 22' width='25' height='25' onClick={() => setCarousel(false)}>
						<line x1='2' y1='-4' x2='28' y2='26' />
						<line x1='2' y1='26' x2='28' y2='-4' />
					</svg>
					<div className='carousel-display'>
						<svg className='arrow left-arrow' viewBox='0 0 24 24' width='30' height='30' onClick={() => handleArrowClick('prev')}>
							<polyline points='-3 4, 12 18, 27 4' />
						</svg>

						<img className='carousel-photo' src={images[active]} alt='property gallery piece' />

						<svg className='arrow right-arrow' viewBox='0 0 24 24' width='30' height='30' onClick={() => handleArrowClick('next')}>
							<polyline points='-3 4, 12 18, 27 4' />
						</svg>
					</div>
					<div className='carousel-thumbnails'>
						{images.map((image, i) => {
							return i === active ? <div key={i} className='bullet-active'></div> : <div key={i} className='bullet-inactive' onClick={() => setActive(i)}></div>;
						})}
					</div>
				</div>
			) : (
				<div className='gallery-grid' style={gridStyle}>
					{images.map((image, i) => {
						return <img key={i} className='grid-photo' src={image} alt='property gallery piece' onClick={() => handleImageSelect(i)} />;
					})}
				</div>
			)}
		</div>
	);
};

export default Gallery;
