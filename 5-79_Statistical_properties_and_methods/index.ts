class Player {
	static game: string = 'COD';
};
const game = Player.game; // COD

//

class Player2 {
	private static game: string = 'COD';

	static getGameName() { // Make is static too
		return Player.game;
	}
	
};

const game2 = Player2.getGameName();

//

function setName() {
	return 'COD';
};

class Player3 {
	private static game: string;

	static {
		Player3.game = setName();
	}
};