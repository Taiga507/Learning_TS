"use strict";
// function logBrtMsg(isBirthday: any, userName: any, age: any) {
// 	if (isBirthday) {
// 		return `Congrats %{userName.toUpperCase()}, age${age + 1}`;
// 	} else {
// 		return 'Error'
// 	}
// }
function logBrtMsg(isBirthday, userName, age) {
    if (isBirthday) {
        return `Congrats ${userName.toUpperCase()}, age${age + 1}`;
    }
    else {
        return 'Error';
    }
}
// const logBrtMsg = (
// 	isBirthday: boolean,
// 	userName: string,
// 	age: number
// ) => {}
logBrtMsg(true, 'Jhon', 40);
// const logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
// 	if (isBirthday) {
// 		return `Congrats %{userName.toUpperCase()}, age${age + 1}`;
// 	} else {
// 		return 'Error'
// 	}
// }
