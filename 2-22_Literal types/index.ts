const port3000: number = 3000;
const port3001: number = 3001;

function startServer(
	protocol: "http" | "https",
	port: 3000 | 3001
): "Server started" {
	if (port === port3000 || port === port3001) {
		console.log(`Server started on ${protocol}://server:${port}`);
	} else {
		console.error("Invalid port");
	}

	return "Server started";
}

startServer("http", 3000);

function createAnimation(
	id: string | number,
	animName: string,
	timingFunc: "ease" | "ease-out" | "ease-in" = "ease",
	duration: number,
	iterCount: "infinite" | number
): void {
	console.log(`${animName} ${timingFunc} ${duration}s ${iterCount}`);

	// const elem = document.querySelector(`#${id}`) as HTMLElement;

	// if (elem) {
	//     console.log(`${animName} ${timingFunc} ${duration}s ${iterCount}`)
	// 	elem.style.animation = `${animName} ${timingFunc} ${duration}s ${iterCount}`;
	// }
}

createAnimation("id", "fade", "ease", 5, 5);