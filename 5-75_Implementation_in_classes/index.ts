interface IUser {
	login: string;
	password: string;
};

class UserForm implements IUser {
	login: string;
	password: string;
};

//

interface Validation {
	valid: boolean;
	isValid: (data: string) => boolean;
};

class UserForm2 implements IUser, Validation {
	login: string;
	password: string;
	valid: boolean;

	isValid(login: string) {
		return login.length > 3;
	};
};