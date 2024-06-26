// type Config = { protocol: "http" | "https"; port: 3000 | 3001 };

// interface Config {
// 	protocol: "https";
// 	port: 3001;
// };

type StartFunction = (protocol: "http" | "https", port: 3000 | 3001) => string;

const startServer: StartFunction = (
	protocol: "http" | "https",
	port: 3000 | 3001
): "Server started" => {
	console.log(`Server started on ${protocol}://server:${port}`);

	return "Server started";
}

interface Config { protocol: "http" | "https"; port: 3000 | 3001 };

interface Role {
	role: string;
};

interface ConfigWithRole extends Config, Role {
	...
}

const serverConfig: ConfigWithRole = {
	protocol: "https",
	port: 3001,
	role: 'admin'
};

interface Styles {
	[key: string]: string;
};

const styles: Styles = {
	position: 'absolute',
	top: '20px',
	left: '50px'
};