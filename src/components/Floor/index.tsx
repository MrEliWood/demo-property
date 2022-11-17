import React, { useState, useEffect } from 'react';
import './style.css';

interface Props {
	data: any;
}

const Floor: React.FC<Props> = ({ data }) => {
	const [gridStyle, setGridStyle] = useState({ height: '' });

	// set grid style based on screen size
	const handleGridSize = () => {
		// large screens
		if (window.innerWidth > 1024) {
			const grid = window.innerHeight - 170;

			const style = {
				height: `${grid}px`
			};

			setGridStyle(style);

			// small screens
		} else if (window.innerWidth > 768) {
			const grid = window.innerHeight - 110;

			const style = {
				height: `${grid}px`
			};

			setGridStyle(style);

			// tablets
		} else {
			const style = {
				height: `100%`
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
		<div className='floor-plans' style={gridStyle}>
			<img className='plan' src='./assets/plans/floor-1.png' alt='first floor blueprint' />
			<img className='plan' src='./assets/plans/floor-2.png' alt='second floor blueprint' />
		</div>
	);
};

export default Floor;
