type MyAnimation = 'fade';

type MyNewAnimation = `${MyAnimation}In`; // 'fadeIn'

type MyAnimation2 = 'fade' | 'swipe';

type MyNewAnimation2 = `${MyAnimation2}In`; // 'fadeIn' | 'swipeIn'


type MyAnimation3 = 'fade' | 'swipe';
type Direction = 'in' | 'out';

type MyNewAnimation3 = `${MyAnimation3}${Direction}`; // 'fadein' | 'fadeout'  | 'swipein' | 'swipeout'


type MyAnimation4 = 'fade' | 'swipe';
type Direction2 = 'in' | 'out';

type MyNewAnimation4 = `${MyAnimation4}${Capitalize<Direction>}`; // 'fadeIn' | 'fadeOut'  | 'swipeIn' | 'swipeOut'


interface Currencies {
	usa: 'usd',
	china: 'un',
	europa: 'eur',
	kz: 'tenge'
};

type CreateCustomCurr<T> = {
	[P in keyof T as `custom${Capitalize<string & P>}`]: string;
};

type CustomCurrencies = CreateCustomCurr<Currencies>;