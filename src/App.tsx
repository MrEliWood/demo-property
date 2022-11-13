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
		// property info
		address: '123 Property Address',
		city: 'Bellevue, WA',
		beds: '3',
		baths: '2',
		sqft: '2,480',
		lot: '2,680',
		year: '1913',
		price: '$1,150,000',
		description: 'Welcome to this beautiful craftsman. With approximately $200K in upgrades, this home tastefully blends historic craftsman style with modern living. High ceilings on every floor with sweeping city and mountain views through big, North facing picture windows, soaking in natural light. Original box beam ceiling and natural oak floors are a bold reference to the original architecture. The classic kitchen boasts all stainless steel appliances, including a Viking Professional six burner stove. Completely remodeled, the second floor is adorned with solid hemlock doors/trim, heated Carrara marble floors, and automatic Velux skylights. Custom picture windows in the main bedroom and bathroom capture the breathtaking North facing views.',
		features: ['Sweeping Northern city and mountain views', 'South facing for perfect natural light year round', 'Approximately $200K in upgrades', 'Full height ceilings throughout, including basement', 'Natural oak floors with bloodwood trim detail', 'Original craftsman box beam ceiling', 'Tiffany & Co. light fixtures in living room and entry', 'Oversized wood burning fireplace', 'Viking Professional six burner stove', 'Solid hemlock doors and trim throughout second floor', 'Triple and double pane storm windows', 'Automatic Velux skylights throughout', 'Carrara marble floors, with heat, in both bathrooms', 'Marble top jetted tub in main bathroom', 'Walk in shower in main bathroom', 'Custom marble top vanity in main bathroom', 'Solid marble vessel bowl sinks in main bathroom', 'Custom, dimming light fixtures throughout', 'Walk in closet, wired for bedroom media', 'Huge, open basement with high ceilings, begging to be finished', 'Brand new furnace'],
		mls: '1234567',

		// broker info
		agent: 'Agent Name',
		brokerage: 'Brokerage Real Estate',
		phone: '(123) 456-7890',
		email: 'agent@brokerage.ex',

		// external link
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
