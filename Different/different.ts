// const box = document.querySelector('.box') as HTMLElement;
// const p = document.querySelector('.paragraph') as HTMLParagraphElement;
// const input = document.querySelector('a'); // Автоматическое определение



class Box {
	width!: number;
};

class Box2 {
	width: number = 500;
};



class Box3 {
	width: number;
	height: number;

	constructor(width: number) {
		this.width = width;
		this.height = 500;
	}
};

class User {
	name!: string;
};

const alex = new User();
alex.name = 'Alex';