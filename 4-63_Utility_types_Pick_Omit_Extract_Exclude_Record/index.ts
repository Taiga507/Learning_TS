interface Currencies {
	usa: 'usd',
	china: 'un',
	europe: 'eur',
	kz: 'tenge'
};

type CurrWithoutUSA = Omit<Currencies, 'usa'>; // исключение


type CurrUSAAndEurope = Pick<Currencies, 'usa' | 'europe'>; // фильтрация по свойству


type CountriesWithoutUSA = Exclude<keyof Currencies, 'usa'>; // 'china' | 'europe' | 'kz'

type MyAnimation = 'fade' | 'swipe';
type FadeType = Exclude<MyAnimation, 'swipe'>; // удаление из юнион типа
type SwipeType = Extract<MyAnimation, 'swipe'>; // выбор подходящего типа, 'swipe'


type CreateCustomCurr<T> = {
	[P in keyof T as `custom${Capitalize<string & P>}`]: string;
};

type PlayersNames = 'john' | 'jane';
type CustomCurrencies = CreateCustomCurr<Currencies>;
type GameDataCurr = Record<PlayersNames, CustomCurrencies>;

const gameData: GameDataCurr = {
	john: {
		customUsa: 'test',
		customChina: 'test',
		customEurope: 'test',
		customKz: 'test'
	},
	jane: {
		customChina: 'test',
		customKz: 'test',
		customEurope: 'test',
		customUsa: 'test'
	}
}