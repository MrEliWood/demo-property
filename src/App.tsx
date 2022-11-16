import React, { useState } from 'react';

// import components
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Home from './components/Home';
import Floor from './components/Floor';

// import styles
import './styles/variables.css';
import './styles/reset.css';
import './styles/fonts.css';
import './styles/style.css';
import './styles/animations.css';

interface Data {
	address: string;
	city: string;
	beds: string;
	baths: string;
	sqft: string;
	lot: string;
	year: string;
	price: string;
	description: string;
	features: string[];
	mls: string;
	agent: string;
	phone: string;
	email: string;
	facebook: string;
	instagram: string;
	brokerage: string;
	copy: string;
	disclaimer: string;
	url: string;
}

function App() {
	// INPUT PROPERTY INFO
	// --------------------------------------------------

	const data: Data = {
		// property info
		address: '123 Property Address',
		city: 'Bellevue, WA',
		beds: '5.0',
		baths: '6.5',
		sqft: '4,850',
		lot: '9,600',
		year: '2018',
		price: '$4.8M',
		description: 'With approximately $200K in upgrades, this home tastefully blends historic craftsman style with modern living. High ceilings on every floor with sweeping city and mountain views through big, North facing picture windows, soaking in natural light. Original box beam ceiling and natural oak floors are a bold reference to the original architecture. The classic kitchen boasts all stainless steel appliances, including a Viking Professional six burner stove. Completely remodeled, the second floor is adorned with solid hemlock doors/trim, heated Carrara marble floors, and automatic Velux skylights. Custom picture windows in the main bedroom and bathroom capture the breathtaking North facing views.',
		features: ['Sweeping Northern city and mountain views', 'South facing for perfect natural light year round', 'Approximately $200K in upgrades', 'Full height ceilings throughout, including basement', 'Natural oak floors with bloodwood trim detail', 'Original craftsman box beam ceiling', 'Tiffany & Co. light fixtures in living room and entry', 'Oversized wood burning fireplace', 'Viking Professional six burner stove', 'Solid hemlock doors and trim throughout second floor', 'Triple and double pane storm windows', 'Automatic Velux skylights throughout', 'Carrara marble floors, with heat, in both bathrooms', 'Marble top jetted tub in main bathroom', 'Walk in shower in main bathroom', 'Custom marble top vanity in main bathroom', 'Solid marble vessel bowl sinks in main bathroom', 'Custom, dimming light fixtures throughout', 'Walk in closet, wired for bedroom media', 'Huge, open basement with high ceilings'],
		mls: '1234567',

		// broker info
		agent: 'Agent Name',
		phone: '1234567890',
		email: 'agent@brokerage.ex',
		facebook: 'www.facebook.com/compass',
		instagram: 'www.instagram.com/compass',
		brokerage: 'Compass Real Estate',
		copy: 'Compass is building the first modern real estate platform, pairing the industry’s top talent with technology to make the search and sell experience intelligent and seamless.',
		disclaimer: 'Compass is a licensed real estate broker and abides by equal housing opportunity laws. All material presented herein is intended for informational purposes only. Information is compiled from sources deemed reliable but is subject to errors, omissions, changes in price, condition, sale, or withdrawal without notice. No statement is made as to accuracy of any description. All measurements and square footages are approximate. This is not intended to solicit property already listed. Nothing herein shall be construed as legal, accounting or other professional advice outside the realm of real estate brokerage.',

		// brokerage link
		url: 'www.compass.com'
	};

	// --------------------------------------------------

	// set landing tab
	const [currentTab, setCurrentTab] = useState('home');

	// render body based on selected tab
	const renderBody = () => {
		switch (currentTab) {
			case 'home':
				return <Home data={data} />;
			case 'gallery':
				return <Gallery data={data} />;
			case 'video':
				return '';
			case 'floor':
				return <Floor data={data} />;
			case 'contact':
				return '';
			default:
				return <Home data={data} />;
		}
	};

	return (
		<div className='App'>
			<Header currentTab={currentTab} setCurrentTab={setCurrentTab} data={data} />
			{renderBody()}
			<Footer data={data} />
		</div>
	);
}

export default App;
