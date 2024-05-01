// interface User {
// 	login: string;
// 	addr: string | undefined;
// 	parents?: {
// 		mother?: string;
// 		father?: string;
// 	};
// }

// const user: User = {
// 	login: 'first',
// 	addr: 'qwerty'
// }

// function sendUserData(obj: User, db?: string): void {
// 	console.log(obj.parents!.father?.toLowerCase(), db!.toLowerCase());
// }

// let dbName: string;
// sendUserData(user, 'taiga');

// console.log(dbName!);

// function sendUserData(obj: User, db?: string): void {
// 	dbName = '507';
// 	console.log(obj.parents!.father?.toLowerCase(), db!.toLowerCase());
// }

// interface User {
// 	readonly login: string;
// };

// const user: User = {
// 	login: 'first'
// };

// user.login = 'Error';

// const basicPorts: readonly number[] = [3000, 3001, 5555];
// basicPorts[0] = 5;

// const basicPorts: readonly [number, ...string[]] = [3000, '3001', '5555'];
// basicPorts[0] = 5;
// basicPorts.push(566);

// const userFreeze: Readonly<User> = {
// 	login: 'first',
// 	password: 'qwerty',
// 	age: 50
// };

// userFreeze.age = 4484;
// userFreeze.password = 'asdf';

// const basicPorts: ReadonlyArray<number> = [3000, 3001, 5555];
// basicPorts[0] = 5;
// basicPorts.push(566);

// enum Directions {
// 	TOP,
// 	RIGTH,
// 	LEFT
// };

// enum TimingFunc {
// 	EASE = 'ease',
// 	EASE_IN = 'ease-in',
// 	LINEAR = 'linear'
// };

// enum TimingFuncNum {
// 	EASE = 1,
// 	EASE_IN = 2,
// 	LINEAR = EASE * 10
// };


// function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
// 	if (dir === Directions.RIGTH) {
// 		console.log(tFunc);
// 	}
// }

// frame('id', Directions.RIGTH, TimingFunc.LINEAR);


// const enum TimingFuncNumNew {
// 	EASE = 'ease',
// 	EASE_IN = 'ease-in',
// 	LINEAR = 'linear'
// };

// const TimingFunc = {
// 	EASE: 'ease',
// 	EASE_IN: 'ease-in',
// 	LINEAR: 'linear'
// } as const;

// type TimingFunc = 'ease' | 'ease-in' | 'linear';

// let smth: any;
// smth = 'str';

// let data: string[] = smth;
// data.find(e => e);


// let smthing: unknown
// smth = 'str';

// let dataSmt: string[] = smthing;
// dataSmt.find(e => e);


// const someValue: any = 10;
// someValue.method();

// const someValueSec: unknown = 10;
// someValueSec.method();


// function fetchData(data: unknown): void {
// 	if (typeof data === 'string') {
// 		console.log(data.toLowerCase());
// 	}
// 	data
// }


// const userData = "{'isBirthdayData': true, 'ageData': 40, 'userNameData': 'John'}";

// function safeParse(s: string): unknown {
// 	return JSON.parse(s);
// }

// const data = safeParse(userData);

// function transerData(d: unknown): void {
// 	if (typeof d === 'string') {
// 		console.log(d.toLowerCase());
// 	} else if (typeof d === 'object' && d) {
// 		console.log(data);
// 	} else {
// 		console.error('Some error');
// 	}
// }
// transerData(data);

// try {
// 	if (1) {
// 		throw new Error('error');
// 	}
// } catch (e) {
// 	if (e instanceof Error) {
// 		console.log(e.message);
// 	} else if (typeof e === 'string') {
// 		console.log(e);
// 	}
// }


// type T0 = any | unknown;
// type T1 = number | unknown;
// type T2 = any & unknown;
// type T3 = number & unknown;


const dataFromControl = {
	water: 200,
	el: 350
};

function checkReadings(data: typeof dataFromControl): boolean {
	const dataFromUser = {
		water: 200,
		el: 350
	};
	if (data.el === dataFromControl.el && data.water === dataFromUser.water) {
		return true;
	} else return false;
};


const PI = 3.14;
let PIClone: typeof PI; 