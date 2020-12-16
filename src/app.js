import './css/reset.scss';
import './css/main.scss';

import app from './js/helper.js';

import Header from './App/Header';
import Former from './App/Former';
import Footer from './App/Footer';

// Header(options);

const loadHandler = () => {
	const components = [
		Header,
		Former,
		Footer
	];

	app.prepend(components);
};

document.addEventListener('DOMContentLoaded', loadHandler);
