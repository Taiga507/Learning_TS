class Box {
	height: number = 500;

	constructor() {
		this.height = 500;
	}
};

//

class Style {
	[s: string]: string;
};

const style = new Style();
// style.color = 5; // Error
style.font = 'Roboto';

//

class Style2 {
	[s: string]: string | ((s: string) => boolean);
	method() {
		// ...
		return false;
	}
};