class User<T, S> {
	name: T;
	age: S;
	
	constructor(name: T, age: S) {
		this.name = name;
		this.age = age;
	}
};

const alex = new User('Alex', 30);
console.log(alex);


const alex = new User<string, number>('Alex', 30); // Не очень полезно
const newData = 'Alex';
const ageData = 30;
const alex = new User<string, number>(newData, ageData); // Теперь неправильные данные не придут


class User<T, S> {
	name: T;
	age: S;

	constructor(name: T, age: S) {
		this.name = name;
		this.age = age;
	}

	sayMyFullName<T>(surname: T): string {
		if (typeof surname !== 'string') {
			return `I have only name: ${this.name}`;
		} else {
			return `${this.name} ${surname}`;
		}
	}
};


class AdminUser<T> extends User<string, number> {
	rules: T;
}