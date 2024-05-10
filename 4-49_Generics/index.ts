function processingDataFrs(data) {
	// ...
	return data;
};

function processingDataSec(data: string | number | boolean | string[]): string | number | boolean | string[] {
	// ...
	return data;
}


function processingDataThr<T>(data: T): T {
	// ...
	return data;
};

const res1 = processingDataThr(1);  // 1
const res2 = processingDataThr('1');  // '2'

let res3 = processingDataThr(1);  // type number
let res4 = processingDataThr('1');  // type string


const res5 = processingDataThr<number>(10);


interface Print<Type> {
	design: Type;
};

const somePrint: Print<string> = {
	design: 'ten'
};
const someOtherPrint: Print<number> = {
	design: 10
};


// Array<T>
const arrOfStrings: Array<string> = ['Hello', 'World!'];