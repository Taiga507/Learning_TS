type User<T> = {
	login: T;
	age: number;
};

const user: User<string> = {
	login: 'str',
	age: 54
};

const user: User<'str'> = {
	login: 'str',
	age: 54
};


type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
const data: OneOrMany<number[]> = [5];


interface User<T> {
	login: T;
	age: number;
};

interface User<ParentsData> {
	login: string;
	age: number;
	parents: ParentsData
};

const user: User<{mother: string, father: string}> = {
	login: 'str',
	age: 54,
	parents: {mother: 'Jane', father: 'no data'}
}


interface ParentsOfUser {
	mother: string;
	father: string;
};

interface User {
	login: string;
	age: number;
	parents: ParentsOfUser;
};

const user: User = {
	login: 'str',
	age: 54,
	parents: {mother: 'Jane', father: 'no data'} // Никаких других свойств
}


interface ParentsOfUser {
	mother: string;
	father: string;
};

interface User<ParentsData extends ParentsOfUser> {
	login: string;
	age: number;
	parents: ParentsData;
};

const user: User<{mother: string, father: string, married: boolean}> = {
	login: 'str',
	age: 54,
	parents: {mother: 'Jane', father: 'no data', married: true} // Никаких других свойств
}


const depositMoney = <T extends number | string>(amount: T): T => {
	console.log(`req to server with amount: ${amount}`)
	return amount;
};

depositMoney(500);
depositMoney('500');
depositMoney(true); //Error


const depositMoney = (amount: number | string): number | string => {
	console.log(`req to server with amount: ${amount}`)
	return amount;
};

depositMoney(500);
depositMoney('500');