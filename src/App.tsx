import React, { useState } from 'react';

// import components
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Home from './components/Home';
import Video from './components/Video';
import Virtual from './components/Virtual';

// import styles
import './styles/variables.css';
import './styles/reset.css';
import './styles/fonts.css';
import './styles/style.css';
import './styles/animations.css';

function App() {
	// INPUT PROPERTY INFO
	// --------------------------------------------------

	const data = {
		// external link for logo
		url: 'https://www.mavengroupnw.com'
	};

	// --------------------------------------------------

	// set landing tab
	const [currentTab, setCurrentTab] = useState('home');

	// render body based on selected tab
	const renderBody = () => {
		switch (currentTab) {
			case 'home':
				return <Home />;
			case 'gallery':
				return <Gallery />;
			case 'video':
				return <Video />;
			case 'virtual':
				return <Virtual />;
			case 'contact':
				return <Contact />;
			default:
				return <Home />;
		}
	};

	return (
		<div className='App'>
			<Header currentTab={currentTab} setCurrentTab={setCurrentTab} data={data} />
			{renderBody()}
			<Footer />
		</div>
	);
}

export default App;
