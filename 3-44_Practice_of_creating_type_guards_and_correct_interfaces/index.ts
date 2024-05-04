// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }
type Animals = 'cat' | 'dog' | 'bird';

interface Animal {
	animal: Animals;
	breed: string;
	sterilized?: string;
};

// Response #1
// {
//     status: 'available',
//     data: {
//         animal: 'cat' | 'dog' | 'bird',
//         breed: string,
//         sterilized?: string,
//         location: string,
//         age?: number
//     }
// }
enum AnimalsStatus {
	AVAILABLE = 'available',
	NOTAVAILABLE = 'not available'
};

interface ResponseTrueData extends Animal {
	location: string;
	age?: number;
};

interface ResponseTrue {
	status: AnimalsStatus.AVAILABLE
	data: ResponseTrueData;
};

// Response #2
// {
//     status: 'not available',
//     data: {
//         message: string,
//         nextUpdateIn: Date
//     }
// }
interface ResponseFalseData {
	message: string;
	nextUpdateIn: Date;
};

interface ResponseFalse {
	status: AnimalsStatus.NOTAVAILABLE
	data: ResponseFalseData;
};

type Res = ResponseTrue | ResponseFalse;

function isAvailable(res: Res): res is ResponseTrue {
	if (res.status === AnimalsStatus.AVAILABLE) {
		return true;
	} else {
		return false;
	}
};

function checkAnimalData(animal: Res): string | ResponseTrueData {
	if (isAvailable(animal)) {
		return animal.data;
	} else {
		return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
	}
}

const iriska: ResponseFalse = {
	status: AnimalsStatus.NOTAVAILABLE,
    data: {
        message: 'uuups',
		nextUpdateIn: new Date(2025/12/12)
    }
}

console.log(checkAnimalData(iriska));