import React from 'react';
import './style.css';

interface Props {
	data: any;
}

const Footer: React.FC<Props> = ({ data }) => {
	return (
		<footer>
			<h1>Footer</h1>
		</footer>
	);
};

export default Footer;
