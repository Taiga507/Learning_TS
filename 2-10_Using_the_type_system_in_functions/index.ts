// function logBrtMsg(isBirthday: any, userName: any, age: any) {
// 	if (isBirthday) {
// 		return `Congrats %{userName.toUpperCase()}, age${age + 1}`;
// 	} else {
// 		return 'Error'
// 	}
// }

function logBrtMsg(isBirthday: boolean, userName: string, age: number) {
	if (isBirthday) {
		return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
	} else {
		return 'Error'
	}
}

// const logBrtMsg = (
// 	isBirthday: boolean,
// 	userName: string,
// 	age: number
// ) => {}

// logBrtMsg(true, 'Jhon', 40);
console.log(logBrtMsg(true, 'Jhon', 40));

// function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
// 	if (isBirthday) {
// 		return `Congrats %{userName.toUpperCase()}, age${age + 1}`;
// 	} else {
// 		return 'Error'
// 	}
// }