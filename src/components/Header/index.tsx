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
	const [scrollOpacity, setScrollOpacity] = useState({ opacity: '1' });

	// mobile nav menu
	const [navStatus, setNavStatus] = useState('nav-hidden');

	const handleMobileNavClick = () => {
		if (window.innerWidth > 768) {
			return;
		} else if (navStatus === 'nav-hidden' || navStatus === 'nav-closed') {
			setNavStatus('nav-open');
		} else if (navStatus === 'nav-open') {
			setNavStatus('nav-closed');
			setTimeout(() => setNavStatus('nav-hidden'), 500);
		}
	};

	// get background video element from page to listen for changes
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

		// hide mobile menu after click
		if (navStatus === 'nav-open') {
			setNavStatus('nav-closed');
			setTimeout(() => setNavStatus('nav-hidden'), 500);
		}
	};

	// home page scroll effects
	const handleScroll = () => {
		// get scroll position
		const scrollPosition = document.getElementById('home')?.getBoundingClientRect().top;

		// remove scroll prompt
		setScrollOpacity({ opacity: '0' });

		// if home page
		if (currentTab === 'home') {
			// scrolls to top, fade in video
			if (scrollPosition && scrollPosition > window.innerHeight - 10) {
				setVideoState({ animation: 'fade-in 1s both', height: '100vh' });
				// scrolls to body content, fade out video
			} else {
				setVideoState({ animation: 'fade-out 1s both', height: '100vh' });
			}
		}
	};

	// handle scroll prompt click based on screen size
	const autoScroll = () => {
		if (window.innerWidth > 1200) {
			window.scroll(0, window.innerHeight * 1.7);
		} else {
			window.scroll(0, window.innerHeight * 0.85);
		}
	};

	// set video size based on window dimensions
	const renderVideo = () => {
		const width = window.innerWidth / 16;
		const height = window.innerHeight / 9;
		if (width > height) {
			return <Vimeo id='background-video' className='background-video' style={videoState} video='https://vimeo.com/692009875' volume={videoVolume} width={window.innerWidth} controls={false} loop={true} background autoplay playsInline />;
		} else {
			return <Vimeo id='background-video' className='background-video' style={videoState} video='https://vimeo.com/692009875' volume={videoVolume} height={window.innerHeight} controls={false} loop={true} background autoplay playsInline />;
		}
	};

	// set video state on page load and scroll
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', () => window.location.reload());
		setVideoState({ animation: 'fade-in 1s both 1s', height: '100vh' });
		// eslint-disable-next-line
	}, [video]);

	return (
		<header className={currentTab === 'home' || currentTab === 'video' || navStatus === 'nav-open' ? 'header' : 'header-collapsed'}>
			<div className='background-video-container'>{renderVideo()}</div>
			<div className='header-banner'>
				<div className='header-banner-content'>
					<a style={headerOpacity} href={data.url} target='_blank' rel='noreferrer'>
						<img className='brokerage-logo' src='./assets/logos/logo-light.png' alt='Listing agent logo' />
					</a>

					{window.innerWidth <= 768 && (
						<svg className='mobile-nav-button' viewBox='0 0 24 12' width='30' height='15' onClick={handleMobileNavClick}>
							<line x1='0' y1='2' x2='24' y2='2' />
							<line x1='0' y1='11' x2='24' y2='11' />
						</svg>
					)}

					<nav style={navOpacity} onClick={handleNavClick} className={navStatus}>
						{window.innerWidth <= 768 && (
							<a style={headerOpacity} href={data.url} target='_blank' rel='noreferrer'>
								<img className='brokerage-logo' src='./assets/logos/logo-light.png' alt='Listing agent logo' />
							</a>
						)}
						{window.innerWidth <= 768 && (
							<svg className='close-mobile-nav-button' viewBox='0 0 30 22' width='25' height='25' onClick={handleMobileNavClick}>
								<line x1='2' y1='-4' x2='28' y2='26' />
								<line x1='2' y1='26' x2='28' y2='-4' />
							</svg>
						)}
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

			<div id='scroll-prompt' className='scroll-prompt' style={scrollOpacity} onClick={() => autoScroll()}>
				<h4>SCROLL</h4>
				<svg className='bouncing-arrow' viewBox='0 0 24 24' width='30' height='30'>
					<polyline points='-3 4, 12 18, 27 4' />
				</svg>
			</div>
		</header>
	);
};

export default Header;
