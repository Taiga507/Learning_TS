const arr: Array<number> = [1, 2, 3] // Обычный массив
const roarr: ReadonlyArray<string> = ['Dune']; // Неизменяемый массив


interface IState {
	data: {};
	tag: string;
};

function action(state: Readonly<IState>) {
	state.data = ''; // Error
};


interface IState2 {
	data: {
		name: string;
	};
	tag: string;
};

const state: Partial<IState2> = {
	data: {
		name: 'John'
	}
};


interface IState3 {
	data: {
		name: string;
	};
	tag?: string;
};

const strictState: Required<IState3> = {
	data: {
		name: 'John'
	}
	// Error, не хватает свойства tag
};