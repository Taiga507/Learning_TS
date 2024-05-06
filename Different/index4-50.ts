function processingDataNew<T, S>(data: T, options: S): T {
	return data;
};

const result = processingDataNew(1, 'fast');
const result2 = processingDataNew('1', 'slow');
const result3 = processingDataNew<number, string>(10, 'slow');


function processingDataNewFrs<T, S>(data: T, options: S): string {
	switch (typeof data) {
		case 'string':
			return `${data}, speed: ${options}`;
		case 'number':
			return `${data.toFixed()}, speed: ${options}`;
		default:
			return 'Not valid';
	}
};


function processingDataNewScn<T, S>(data: T[], options: S): T[] {
	return data;
};

let result4 = processingDataNewScn([1.004], 'fast');
let result5 = processingDataNewScn(['1'], 'slow');
const result6 = processingDataNewScn<number, string>([10], 'slow');


interface DataSaver {
	processing: <T>(data: T) => T;
}

const saver: DataSaver = {
	processing: <T>(data: T) => {
		// ...
		console.log(data);
		return data;
	}
};

saver.processing(5);

interface DataSaverSec {
	processing: <T>(data: T) => T;
}

const saverSec: DataSaver = {
	processing(data) {
		// ...
		console.log(data);
		return data;
	}
};

saverSec.processing(5);

interface DataSaverThr {
	processing: <T>(data: T) => T;
}

const saverThr: DataSaver = {
	processing: (data) => {
		// ...
		console.log(data);
		return data;
	}
};

saverThr.processing(5);


// function processing<T>(data: T): T {
// 	return data
// };

// let newFunc: <T>(data: T) => T = processing;

// interface DataSaver {
// 	processing: <T>(data: T) => T;
// };

// const saverFour: DataSaver = {
// 	processing: processing
// };


// interface ProcessingFifth {
// 	<T>(data: T): T
// };

// function processingSec<T>(data: T): T {
// 	return data
// }

// let newFuncSec: ProcessingFifth = processingSec;

// interface DataSaver {
// 	processingSec: ProcessingFifth;
// };