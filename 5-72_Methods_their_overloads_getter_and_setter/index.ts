class Box {
	width: number;
	height: number;
	volume: string;

	constructor(volume: string);
	constructor(width: number);
	constructor(widthOrVolume: number | string) {
		if (typeof widthOrVolume === 'number') {
			this.width = widthOrVolume;
		} else {
			this.volume = widthOrVolume;
		}

		this.height = 500;
	}
};