interface Car {
	name: "car";
	engine: string;
	wheels: number;
}

interface Ship {
	name: "ship";
	engine: string;
	sail: string;
}

interface Airplane {
	name: "airplane";
	engine: string;
	wings: string;
}

interface ComplexVehicle {
	name: "car" | "ship" | "airplane";
	engine: string;
	wheels?: number;
	sail?: string;
	wings?: string;
}

// type Vehicle = Car | Ship | Airplane;
type Vehicle = ComplexVehicle;

function isCar(car: Vehicle): car is ComplexVehicle {
	return "wheels" in car;
}

function isShip(ship: Vehicle): ship is ComplexVehicle {
	return "sail" in ship;
}

function repairVehicle(vehicle: ComplexVehicle) {
	switch (vehicle.name) {
		case "car":
			console.log(vehicle.engine);
			break;
		case "ship":
			console.log(vehicle.sail);
			break;
		case "airplane":
			console.log(vehicle.wings);
			break;
		default:
			// const smth: never = vehicle;
			console.log("Ouuups!");
	}
}
