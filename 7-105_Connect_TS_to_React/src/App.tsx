import React from 'react';
import './App.css';

interface ITestData {
	children?: React.ReactNode;
	name: string;
	age: number;
};

function App() {
	return (
		<div className="App">
			<Test name='Alex' age={44}>
				<div>Test</div>
			</Test>
		</div>
	);
}

const Test = ({name, age}: ITestData) => {
	return (
		<>
			<h1>Hello, {name}, age: {age}</h1>
		</>
	)
};

// const Test: React.FC<ITestData> = ({name, age}) => {
// 	return (
// 		<>
// 			<h1>Hello, {name}, age: {age}</h1>
// 		</>
// 	)
// };

//____

// type GenericComponentProps<T> = {
// 	prop: T;
// 	callback: (t: T) => void;
// };

// С аннотаций типов React.FC - дженерики работать не будут!
// function GenericComponent: React.FC<T>(props: GenericComponentProps<T>) {}

// Без аннотации дженерика работают.
// function GenericComponent<T>(props: GenericComponentProps<T>) {}

export default App;
