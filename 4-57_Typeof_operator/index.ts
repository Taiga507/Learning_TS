function printMsg(msg: string[] | number | boolean): void {
	if (Array.isArray(msg)) {
		msg.forEach((m) => console.log(m));
	} else if (typeof msg === 'number') {
		console.log(msg);
	} else {
		console.log(msg);
	}
	console.log(msg);
}


const dataFromControl = {
	water: 200,
	el: 500
};

function chechReadings(data: typeof dataFromControl): boolean {
	const dataFromUser = {
		water: 200,
		el: 500
	};
	// ...
};


const google = {
	name: 'Google',
	debts: 50000
};

type GoogleKeys = keyof google; // Error! google is an object, not a type
type GoogleKeys2 = keyof typeof google; // 'name' | 'debts'