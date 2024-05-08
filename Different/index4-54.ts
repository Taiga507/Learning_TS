const arr: Array<number> = [1, 2, 3] // Обычный массив
const roarr: ReadonlyArray<string> = ['Dune']; // Неизменяемый массив


interface IState {
	data: {};
	tag: string;
};

function action(state: Readonly<IState>) {
	state.data = ''; // Error
};


interface IState {
	data: {
		name: string;
	};
	tag: string;
};

const state: Partial<IState> = {
	data: {
		name: 'John'
	}
};


interface IState {
	data: {
		name: string;
	};
	tag?: string;
};

const strictState: Required<IState> = {
	data: {
		name: 'John'
	}
	// Error, не хватает свойства tag
};