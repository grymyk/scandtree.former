import './logo.scss';
import logoTemplate from './logo.handlebars';

class Logo {
	constructor(options) {
		this.elem = document.createElement('h1');
		this.elem.className = 'logo';
		this.elem.innerHTML = logoTemplate(options);
	}
}

export default Logo;
