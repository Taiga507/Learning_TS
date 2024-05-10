type Example = 'string' extends 'Hello' ? string : number; // number, так как литеральные типа разные


const str: string = 'Hello';
type Example2 = 'string' extends str ? string : number; // Error
type Example3 = 'string' extends typeof str ? string : number; // Ok, string так как тип переменной string


interface IDataFromUser {
	weight: string;
}

interface IDataFromBase {
	calories: number;
}

type FromUserOrFromBase<T extends string | number> = T extends string
	? IDataFromUser
	: IDataFromBase;

const test: FromUserOrFromBase<number> = {
	calories: 56
};

interface User<T extends 'created' | Date> {
	created: T extends 'created' ? 'created' : Date;
};
const user: User<'created'> = {
	created: 'created'
}


function calcalateDailyCalories<T extends string | number>(
	numOrStr: T
): T extends string ? IDataFromUser : IDataFromBase {
	if (typeof numOrStr === 'string') {
		const obj: IDataFromUser = {
			weight: numOrStr
		};
		return obj as T extends string ? IDataFromUser : IDataFromBase; // Ok
		// or
		// return obj as FromUserOrFromBase<T>;
	} else {
		const obj: IDataFromBase = {
			calories: numOrStr
		}
		// return obj; // Error
		return obj as FromUserOrFromBase<T>;
	}
};


type GetStringType<T extends 'Hello' | 'world' | string> = T extends 'Hello'
	? 'Hello' : T extends 'world'
	? 'world' : string;


type GetFirstType<T> = T extends Array<infer First> ? First : T;
type Ex = GetFirstType<number[]>; // number
type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T;


type ToArray<Type> = Type extends any ? Type[] : never;
type ExArray = ToArray<number>; // number[]
type ExArray2 = ToArray<Ex | string>; // number[] | string[]