const jsonTest = '{"name": "Test", "data": "dune"}';

interface JSONTest {
	name: string;
	data: number;
}

const objFromJson: JSONTest = JSON.parse(jsonTest);

//


const userData = '{"isBirthday": "true", "userNameData": "John"}';

function safeParse(s: string): unknown {
	return JSON.parse(s);
};

const data = safeParse(userData);

function transferData(d: unknown): void {
	if (typeof d === 'string') {
		console.log(d.toLowerCase())
	} else if (typeof d === 'object' && d) {
		console.log(data);
	} else {
		console.error('Some error');
	}
};

//

fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => response.json())
	.then((json) => {
		if ('id' in json) {
			toDoList.push(json);
		}
		console.log(toDoList);
 	});

//

fetch('https://jsonplaceholder.typicode.com/todos')
	.then((response) => response.json())
	.then((json) => {
		if ('id' in json && 'userId' in json) {
			toDoList.push(json);
		} else if (Array.isArray(json)) {
			toDoList = json;
		} else {
			console.log(`${json} - is a string`);
		}
		console.log(toDoList);
	});

//

let toDoList: ToDo[] = [];

interface ToDo {
	userId: number;
	id: number;
	title: string;
	complleted: boolean;
};

fetch('https://jsonplaceholder.typicode.com/todos')
	.then((response) => response.json())
	.then((json: ToDo) => {
		if ('id' in json && 'userId' in json) {
			toDoList.push(json);
			toDoList[0].complleted // тут будут подсказки о существующих свойствах
		}
	});

//

const promise = new Promise<string>((resolve, reject) => {
	resolve('test'); // resolve принимает только string
});

promise.then((value) => {
	console.log(value.toLowerCase()); // value - string
});