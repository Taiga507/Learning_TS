// interface User {
// 	login: string;
// 	addr: string | undefined;
// 	parents?: {
// 		mother?: string;
// 		father?: string;
// 	};
// }
// const user: User = {
// 	login: 'first',
// 	addr: 'qwerty'
// }
// function sendUserData(obj: User, db?: string): void {
// 	console.log(obj.parents!.father?.toLowerCase(), db!.toLowerCase());
// }
// let dbName: string;
// sendUserData(user, 'taiga');
// console.log(dbName!);
// function sendUserData(obj: User, db?: string): void {
// 	dbName = '507';
// 	console.log(obj.parents!.father?.toLowerCase(), db!.toLowerCase());
// }
// interface User {
// 	readonly login: string;
// };
// const user: User = {
// 	login: 'first'
// };
// user.login = 'Error';
// const basicPorts: readonly number[] = [3000, 3001, 5555];
// basicPorts[0] = 5;
// const basicPorts: readonly [number, ...string[]] = [3000, '3001', '5555'];
// basicPorts[0] = 5;
// basicPorts.push(566);
// const userFreeze: Readonly<User> = {
// 	login: 'first',
// 	password: 'qwerty',
// 	age: 50
// };
// userFreeze.age = 4484;
// userFreeze.password = 'asdf';
// const basicPorts: ReadonlyArray<number> = [3000, 3001, 5555];
// basicPorts[0] = 5;
// basicPorts.push(566);
var Directions;
(function (Directions) {
    Directions[Directions["TOP"] = 0] = "TOP";
    Directions[Directions["RIGTH"] = 1] = "RIGTH";
    Directions[Directions["LEFT"] = 2] = "LEFT";
})(Directions || (Directions = {}));
;
var TimingFunc;
(function (TimingFunc) {
    TimingFunc["EASE"] = "ease";
    TimingFunc["EASE_IN"] = "ease-in";
    TimingFunc["LINEAR"] = "linear";
})(TimingFunc || (TimingFunc = {}));
;
var TimingFuncNum;
(function (TimingFuncNum) {
    TimingFuncNum[TimingFuncNum["EASE"] = 1] = "EASE";
    TimingFuncNum[TimingFuncNum["EASE_IN"] = 2] = "EASE_IN";
    TimingFuncNum[TimingFuncNum["LINEAR"] = 10] = "LINEAR";
})(TimingFuncNum || (TimingFuncNum = {}));
;
function frame(elem, dir, tFunc) {
    if (dir === Directions.RIGTH) {
        console.log(tFunc);
    }
}
frame('id', Directions.RIGTH, TimingFunc.LINEAR);
;
