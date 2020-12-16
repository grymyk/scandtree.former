class Header {
	constructor() {
		this.elem = document.createElement('div');
		this.elem.id = 'header';

		this.loadHandler = this.loadHandler.bind(this.elem);
		this.elem.load = this.loadHandler;
	}

	loadHandler() {
		// console.log(this.id);
		// console.log(this.menu());
	}
}

export default Header;
