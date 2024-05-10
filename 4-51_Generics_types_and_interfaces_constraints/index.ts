type User<T> = {
	login: T;
	age: number;
};

const user: User<string> = {
	login: 'str',
	age: 54
};

const user2: User<'str'> = {
	login: 'str',
	age: 54
};


type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
const data: OneOrMany<number[]> = [5];


interface User5<T> {
	login: T;
	age: number;
};

interface User2<ParentsData> {
	login: string;
	age: number;
	parents: ParentsData
};

const user3: User2<{mother: string, father: string}> = {
	login: 'str',
	age: 54,
	parents: {mother: 'Jane', father: 'no data'}
}


interface ParentsOfUser {
	mother: string;
	father: string;
};

interface User3 {
	login: string;
	age: number;
	parents: ParentsOfUser;
};

const user4: User3 = {
	login: 'str',
	age: 54,
	parents: {mother: 'Jane', father: 'no data'} // Никаких других свойств
}


interface ParentsOfUser {
	mother: string;
	father: string;
};

interface User4<ParentsData extends ParentsOfUser> {
	login: string;
	age: number;
	parents: ParentsData;
};

const user5: User4<{mother: string, father: string, married: boolean}> = {
	login: 'str',
	age: 54,
	parents: {mother: 'Jane', father: 'no data', married: true}
}


const depositMoney = <T extends number | string>(amount: T): T => {
	console.log(`req to server with amount: ${amount}`)
	return amount;
};

depositMoney(500);
depositMoney('500');
depositMoney(true); //Error


const depositMoney2 = (amount: number | string): number | string => {
	console.log(`req to server with amount: ${amount}`)
	return amount;
};

depositMoney2(500);
depositMoney2('500');