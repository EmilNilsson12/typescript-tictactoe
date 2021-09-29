import React from 'react';
import logo from './logo.svg';
import './App.css';

// Base / Parent Class
class Animal {
	age: number;
	legs: number;
	name: string;

	constructor(age: number, legs: number, name: string) {
		this.age = age;
		this.legs = legs;
		this.name = name;
	}
}

// Derived / Child Class
class Dog extends Animal {
	woof(): string {
		return 'WOOF! WOOF! WOOF!';
	}
}

// Derived / Child Class
class Cat extends Animal {
	meow(): string {
		return 'meow! meow! meow!';
	}
}

const myDog = new Dog(2, 4, 'Baba');
const myCat = new Cat(2, 4, 'Keke');

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Hunden <em>{myDog.name}</em> säger "{myDog.woof()}"
				</p>
				<p>
					Katten <em>{myCat.name}</em> säger "{myCat.meow()}"
				</p>
			</header>
		</div>
	);
}

export default App;
