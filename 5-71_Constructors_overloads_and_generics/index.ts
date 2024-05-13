class Box {
	width: number;
	height: number;
	volume: number | undefined;
	content: string | undefined;

	constructor(width: number, volume?: number, content?: string) {
		this.width = width;
		this.volume = volume;
		this.content = content;
		this.height = 500;
	};

	calculateVolume(): void {
		if (!this.volume) {
			this.volume = this.width * this.height;
			console.log(`Объем посылки ${this.volume}`);
		} else {
			console.log(`Объем посылки ${this.volume}`);
		}
	};

	checkBoxSize(transport: number): string;
	checkBoxSize(transport: number[]): string;
	checkBoxSize(transport: number | number[]): string {
		if (typeof transport === 'number') {
			return transport >= this.width ? 'Ok' : 'Not ok';
		} else {
			return transport.some((t) => t >= this.width) ? 'Ok' : 'Not ok';
		}
	};

	get boxContent() {
		return this.content;
	};
	
	set boxContent(value) {
		this.content = `Date: ${new Date().toTimeString()}, Content: ${value}`;
	};

	async contentDate(value: string) {
		const date =  await new Date().toTimeString();
		this.content = `Date: ${date}, Content: ${value}`;
		console.log(this.content);
		return this.content;
	};
};

const firstBox = new Box(250);
console.log(firstBox.calculateVolume());
console.log(firstBox.checkBoxSize(251));
// firstBox.boxContent = 'Test';
console.log(firstBox.boxContent = 'Test');
console.log(firstBox.boxContent);
console.log(firstBox.contentDate('test server'));