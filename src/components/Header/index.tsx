import React, { useState, useEffect } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import './style.css';

interface Props {
	currentTab: string;
	setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
	data: any;
}

const Header: React.FC<Props> = ({ currentTab, setCurrentTab, data }) => {
	// set default video state
	const [videoState, setVideoState] = useState({ animation: 'none', height: '100vh' });
	const [videoVolume, setVideoVolume] = useState(0);

	// set default opacity for header elements
	const [headerOpacity, setHeaderOpacity] = useState({ opacity: '1' });
	const [navOpacity, setNavOpacity] = useState({ opacity: '1' });

	// get background video element from page
	const video = document.getElementById('background-video');

	// set current tab and header style based on user selection
	const handleNavClick = (e: any) => {
		switch (e.target.id) {
			case 'nav-home':
				setCurrentTab('home');
				setHeaderOpacity({ opacity: '1' });
				setNavOpacity({ opacity: '1' });
				setVideoState({ animation: 'fade-in 1s both 1s', height: '100vh' });
				setVideoVolume(0);
				break;
			case 'nav-gallery':
				setCurrentTab('gallery');
				setHeaderOpacity({ opacity: '1' });
				setNavOpacity({ opacity: '1' });
				setVideoState({ animation: 'fade-out 1s both', height: '20vh' });
				setVideoVolume(0);
				break;
			case 'nav-video':
				setCurrentTab('video');
				setHeaderOpacity({ opacity: '0' });
				setNavOpacity({ opacity: '0.5' });
				setVideoState({ animation: 'fade-in 1s both 1s', height: '100vh' });
				setVideoVolume(1);
				break;
			case 'nav-floor':
				setHeaderOpacity({ opacity: '1' });
				setNavOpacity({ opacity: '1' });
				setCurrentTab('floor');
				setVideoState({ animation: 'fade-out 1s both', height: '20vh' });
				setVideoVolume(0);
				break;
			case 'nav-contact':
				setHeaderOpacity({ opacity: '1' });
				setNavOpacity({ opacity: '1' });
				setCurrentTab('contact');
				setVideoState({ animation: 'fade-out 1s both', height: '20vh' });
				setVideoVolume(0);
				break;
			default:
				break;
		}
	};

	// listen for background video load
	useEffect(() => {
		setVideoState({ animation: 'fade-in 1s both 1s', height: '100vh' });
		// eslint-disable-next-line
	}, [video]);

	return (
		<header className={currentTab === 'home' || currentTab === 'video' ? 'header' : 'header-collapsed'}>
			<Vimeo id='background-video' className='background-video' style={videoState} video='https://vimeo.com/692009875' volume={videoVolume} height={window.innerHeight} loop={true} autoplay playsInline />
			<div className='header-banner'>
				<div className='header-banner-content'>
					<a style={headerOpacity} href={data.url} target='_blank' rel='noreferrer'>
						<img className='brokerage-logo' src='./assets/logos/logo-light.png' alt='Listing agent logo' />
					</a>
					<nav style={navOpacity} onClick={handleNavClick}>
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
							<li id='nav-floor' className={currentTab === 'floor' ? 'tab-active' : 'tab'}>
								Floor Plan
							</li>
						</ul>
						<button id='nav-contact' className='button-light'>
							Contact
						</button>
					</nav>
				</div>
			</div>

			<div className='header-address' style={headerOpacity}>
				<h2>{data.city}</h2>
				<h1>{data.address}</h1>
			</div>
		</header>
	);
};

export default Header;
