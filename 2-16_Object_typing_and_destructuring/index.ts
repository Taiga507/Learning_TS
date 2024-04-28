// const userData = {
// 	isBirthdayData: true,
// 	ageData: 40,
// 	userNameData: 'John',
// }

// const createError = (msg: string) => {
// 	throw new Error(msg);
// };

// function logBrtMsg(data: {
// 	isBirthdayData: boolean;
// 	ageData: number;
// 	userNameData: string;
// }): string {
// 	if (data.isBirthdayData) {
// 		return `Congrats ${data.userNameData.toUpperCase()}, age: ${data.ageData + 1}`;
// 	} else {
// 		return createError('Error');
// 	}
// }

// console.log(logBrtMsg(userData));

const userData = {
	isBirthdayData: true,
	ageData: 40,
	userNameData: 'John',
	message: {
		error: 'Error'
	}
}

const createError = (msg: string) => {
	throw new Error(msg);
};

function logBrtMsg({
	isBirthdayData,
	ageData,
	userNameData,
	message: {error}
}: {
	isBirthdayData: boolean;
	ageData: number;
	userNameData: string;
	message: {error: string}
}): string {
	if (isBirthdayData) {
		return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
	} else {
		return createError(error);
	}
}

console.log(logBrtMsg(userData));