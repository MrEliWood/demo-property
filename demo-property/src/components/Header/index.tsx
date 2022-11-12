import React from 'react';
import './style.css';

interface Props {
	currentTab: string;
	setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<Props> = ({ currentTab, setCurrentTab }) => {
	return <h1>Header</h1>;
};

export default Header;
