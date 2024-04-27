const createError = (msg: string) => {
	throw new Error(msg);
	console.log(1);
};

// const createError = () => {
// 	if (msg) throw new Error(msg); 
// };

// const createError = () => {
// 	while (true) {}
// };

// function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
// 	if (isBirthday) {
// 		return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
// 	} else {
// 		return createError('Error');
// 	}
// }

function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
	if (isBirthday === true) {
		return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
	} else if (isBirthday === false) {
		return 'Too bad';
	}
	return createError('Error');
}

console.log(logBrtMsg(false, 'John', 40));