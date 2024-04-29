const message: string | number = 5;

const messages: string[] | number[] = ["a", "b"];

function printMsg(msg: string[] | number | boolean): void {
	if (Array.isArray(msg)) {
		msg.forEach((m) => console.log(m));
	} else if (typeof msg === "number") {
		console.log(msg);
	} else {
		console.log(msg);
	}
	console.log(msg);
}

printMsg(4);

const printReadings = (a: string | number[]): void => {
	console.log(a.slice(0, 3));
};

function checkReadings(readings: { system: number } | { user: number }): void {
	if ("system" in readings) {
		console.log(readings.system);
	}
}

function logValue(x: Date | string) {
	if (x instanceof Date) {
		console.log(x.toUTCString());
	} else {
		console.log(x.toUpperCase());
	}
}
