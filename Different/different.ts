// const box = document.querySelector('.box') as HTMLElement;
// const p = document.querySelector('.paragraph') as HTMLParagraphElement;
// const input = document.querySelector('a'); // Автоматическое определение

//

// class Box {
// 	width!: number;
// };

// class Box2 {
// 	width: number = 500;
// };



// class Box3 {
// 	width: number;
// 	height: number;

// 	constructor(width: number) {
// 		this.width = width;
// 		this.height = 500;
// 	}
// };

// class User {
// 	name!: string;
// };

// const alex = new User();
// alex.name = 'Alex';

//

abstract class AbstractVehicle {
	model: string;
	capacity: number;
	abstract startEngine: (time: Date) => string;
	stopEngine(time: Date): string {
		this.startEngine(new Date());
		return 'Engine Stopped';
	}
};

class Vehicle extends AbstractVehicle {
	startEngine = (time: Date) => {
		return 'Started';
	}
};

//

interface IEngine {
	model: string;
	capacity: number;
	startEngine: (time: Date) => string;
};

class Vehicle implements IEngine {
	model: string;
	capacity: number;
	startEngine = (time: Date) => {
		return 'Started';
	}
};