type voidFunc = () => void;

const retString: voidFunc = () => {
	// ...
	return 'string';
};

const s = retString();

const retNum: voidFunc = () => {
	// ...
	return 5;
};

const n = retNum;

function fun(): void {
	return true;
}