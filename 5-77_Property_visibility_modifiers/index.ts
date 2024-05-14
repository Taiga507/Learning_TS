class User {
	public email: string;
	public name: string;

	constructor(email: string, name: string) {
		this.email = email;
		this.name = name;
	}
};

class User2 {
	constructor(public email: string, public name: string) {}
};

//

class Player {
	private login: string;
	private password: string;
	public server: string;
}

const player = new Player();
player.login = '1qaz'; // Error
player.server = 'first'; // Ok

//

class Player2 {
	private login: string;
	private _password: string;
	public server: string;

	get password() {
		return this._password;
	};

	set password(newPass: string) {
		// Validation
		this._password = newPass;
	}
}

const player2 = new Player2();
player2.password = '1qaz'; 

//

class Player3 {
	private login: string;
	private password: string;
	public server: string;
	protected consent: boolean;
}

class CompetitivePlayer extends Player3{
	rank: number;

	isConsented() {
		this.consent ? 'Yes' : 'No'; // Ok
		this.login // Error, Property 'login' is private and only accessible within class 'Player3'
	}
}