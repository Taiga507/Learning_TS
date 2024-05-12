type FromPromise = Awaited<Promise<number>>; // number, а не Promise<number>

type FromPromise2 = Awaited<Promise<Promise<number>>>; // number

//

interface User {
	name: string;
};

async function fetchUsers(): Promise<User[]> {
	const users: User[] = [
		{
			name: 'Alex'
		}
	];

	return users;
};

const users = fetchUsers(); // users type Promise<User[]>

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>; // User[]

//

type UnwrapperPromise<T> = T extends Promise<infer Return> ? Return : T;
type FetchDataReturnType = UnwrapperPromise<ReturnType<typeof fetchUsers>>;