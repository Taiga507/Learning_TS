const test: null = null;
const test1: any = null;
const test2: string = null;
const test3: number = null;

const test4: undefined = undefined;
const test5: any = undefined;
const test6: string = undefined;
const test7: number = undefined;

function getRndData() {
	if (Math.random() < 0.5) {
		return null;
	} else {
		return 'Some Data';
	}
}

const data = getRndData();
const trimmedData = data.trim();

const test8: string = null;