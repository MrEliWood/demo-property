import React from 'react';
import './style.css';

interface Props {
	currentTab: string;
	setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
	data: any;
}

const Header: React.FC<Props> = ({ currentTab, setCurrentTab, data }) => {
	// set current tab based on user selection
	const handleNavClick = (e: any) => {
		switch (e.target.id) {
			case 'nav-home':
				setCurrentTab('home');
				break;
			case 'nav-gallery':
				setCurrentTab('gallery');
				break;
			case 'nav-video':
				setCurrentTab('video');
				break;
			case 'nav-virtual':
				setCurrentTab('virtual');
				break;
			case 'nav-contact':
				setCurrentTab('contact');
				break;
			default:
				break;
		}
	};

	return (
		<header className={currentTab === 'home' ? 'header' : 'header-collapsed'}>
			<div className='header-banner'>
				<a href={data.url}>
					<img className='header-logo' src='./assets/logos/header-logo.png' alt='Listing agent logo' />
				</a>
				<nav onClick={handleNavClick}>
					<ul className='nav-links'>
						<li id='nav-home' className={currentTab === 'home' ? 'tab-active' : 'tab'}>
							Home
						</li>
						<li id='nav-gallery' className={currentTab === 'gallery' ? 'tab-active' : 'tab'}>
							Gallery
						</li>
						<li id='nav-video' className={currentTab === 'video' ? 'tab-active' : 'tab'}>
							Video
						</li>
						<li id='nav-virtual' className={currentTab === 'virtual' ? 'tab-active' : 'tab'}>
							Virtual Tour
						</li>
					</ul>
					<button id='nav-contact' className='button-light'>
						Contact
					</button>
				</nav>
			</div>
		</header>
	);
};

export default Header;
