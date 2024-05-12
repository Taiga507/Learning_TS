function calculate(a: number, b: number): number {
	return a * b;
};

type CalculateRT = ReturnType<typeof calculate>; // number

//

function calculate2(a: number, b: number): number {
	return a * b;
};

type CalculatePT = Parameters<typeof calculate2>; // [a: number, b: number]
type CalculatePT2 = Parameters<typeof calculate>[0]; // number

//

class Example {
	constructor(a: number) {}
};

type T0 = ConstructorParameters<typeof Example>; // [a: number]