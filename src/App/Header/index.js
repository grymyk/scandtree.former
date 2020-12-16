import './header.scss';

import Header from './header.js';
import Logo from './Logo/logo.js';

const scandtreeLogo = new Logo({
	href: 'http://scandinaviantree.com',
	name: 'scandinavian tree'
});

const header = new Header().elem;

header.append(scandtreeLogo.elem);

export default header;
