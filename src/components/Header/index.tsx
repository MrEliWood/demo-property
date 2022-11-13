import React from 'react';
import './style.css';

interface Props {
	currentTab: string;
	setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
	data: any;
}

const Header: React.FC<Props> = ({ currentTab, setCurrentTab, data }) => {
	// set current tab and header style based on user selection
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
				<a href={data.url} target='_blank' rel='noreferrer'>
					<img className='brokerage-logo' src='./assets/logos/logo-light.png' alt='Listing agent logo' />
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

			<div className='header-address'>
				<h2>{data.city}</h2>
				<h1>{data.address}</h1>
			</div>
		</header>
	);
};

export default Header;
