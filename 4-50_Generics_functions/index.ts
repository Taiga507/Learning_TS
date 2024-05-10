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


interface DataSaver2 {
	processing: <T>(data: T) => T;
}

const saver2: DataSaver2 = {
	processing(data) {
		// ...
		console.log(data);
		return data;
	}
};

saver2.processing(5);


interface DataSaver3 {
	processing: <T>(data: T) => T;
}

const saver3: DataSaver3 = {
	processing: (data) => {
		// ...
		console.log(data);
		return data;
	}
};

saver3.processing(5);


function processing<T>(data: T): T {
	return data
};

let newFunc: <T>(data: T) => T = processing;

interface DataSaver4 {
	processing: <T>(data: T) => T;
};

const saver4: DataSaver4 = {
	processing: processing
};


interface Processing5 {
	<T>(data: T): T
};

function processing2<T>(data: T): T {
	return data
}

let newFunc2: Processing5 = processing2;

interface DataSaver5 {
	processing: Processing5;
};