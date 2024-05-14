class Player {
	#login: string;

	constructor(login: string) {
		this.#login = login;
	}

	logIn() {
		return `Player ${this.#login} online`;
	}
};

const player = new Player('Test');
const test = player.logIn;
test(); // Error: Cannot read properties of undefined(reading '#login')

//

class Player2 {
	#login: string;

	constructor(login: string) {
		this.#login = login;
	}

	logIn(this: Player2) { // this type
		return `Player ${this.#login} online`;
	}
};

const player2 = new Player2('Test');
const test2 = player2.logIn;
test(); // Error: The 'this' context of type 'void' isn't assignable to method's 'this' of type 'Player2'

//

connect(): Player2 {
	// Do stmh
	return this;
}

connect() {
	// Do stmh
	return this;
}

//

	isPro(): this is CompetitivePlayer {
		return this instanceof CompetitivePlayer;
	}
}
const somePlayer: Player | CompetitivePlayer = new CompetitivePlayer('Test');
somePlayer.isPro() ? console.log(somePlayer) : console.log(somePlayer);