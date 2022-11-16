import React from 'react';
import './style.css';

interface Props {
	data: any;
}

const Floor: React.FC<Props> = ({ data }) => {
	return <h1>Floorplan</h1>;
};

export default Floor;
