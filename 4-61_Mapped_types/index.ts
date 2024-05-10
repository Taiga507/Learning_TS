interface Currencies {
	usa: 'usd',
	china: 'un',
	europe: 'eur',
	kz: 'tenge'
};

type CustomCurrencies = {
	usa: string;
	china: string;
	europa: string;
	kz: string;
}


type Keys = 'name' | 'age' | 'role';

type User = {
	[K in Keys]: string;
};

const alex: User = {
	name: 'Alex',
	age: '44',
	role: 'admin'
};


type CreateCustomCurr<T> = {
	[P in keyof T]: string;
};

type CustomCurrencies2 = CreateCustomCurr<Currencies>;


type CreateCustomCurr2<T> = {
	readonly [P in keyof T]: string;
};


type CreateCustomCurr3<T> = {
	[P in keyof T]?: string;
};


type CreateCustomCurr4<T> = {
	-readonly [P in keyof T]-?: string;
};