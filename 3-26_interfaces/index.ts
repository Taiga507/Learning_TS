// type Config = { protocol: "http" | "https"; port: 3000 | 3001 };

// const serverConfig: Config = {
// 	protocol: "https",
// 	port: 3001,
// };

type StartFunction = (protocol: "http" | "https", port: 3000 | 3001) => string;

const startServer: StartFunction = (
	protocol: "http" | "https",
	port: 3000 | 3001
): "Server started" => {
	console.log(`Server started on ${protocol}://server:${port}`);

	return "Server started";
}

type Config = { protocol: "http" | "https"; port: 3000 | 3001 };

type Role = {
	role: string;
};

type ConfigWithRole = Config & Role;

const serverConfig: ConfigWithRole = {
	protocol: "https",
	port: 3001,
	role: 'admin'
};

const backupConfig = {
	protocol: "https",
	port: 3000
}