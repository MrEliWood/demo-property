import React from 'react';
import './style.css';

interface Props {
	data: any;
}

const Floor: React.FC<Props> = ({ data }) => {
	return (
		<div className='floor-plans'>
			<img className='plan' src='./assets/plans/floor-1.png' alt='first floor blueprint' />
			<img className='plan' src='./assets/plans/floor-2.png' alt='second floor blueprint' />
		</div>
	);
};

export default Floor;
