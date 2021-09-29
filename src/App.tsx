import React from 'react';
import logo from './logo.svg';
import './App.css';

class User {
	constructor(firstName: string, lastName: string, email: string) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}
	firstName: string;
	lastName: string;
	email: string;

	get fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	doesEmailMatch(email: string): boolean {
		return this.email === email;
	}
}

export class Message {
	constructor(title: string, message: string) {
		this.title = title;
		this.message = message;
		// this._isSent = false;
		this.deliveryDate = new Date();
	}

	title: string;
	message: string;
	deliveryDate: Date;

	private _isSent: boolean;
	set isSent(value: boolean) {
		if (value === true) {
			this.deliveryDate = new Date();
		}
		this._isSent = value;
	}
	get isSent(): boolean {
		return this._isSent;
	}

	get messageStatus(): string {
		const sentMessage = this.isSent ? 'Has been sent' : 'Has not been sent';

		return `${this.message} | ${sentMessage}`;
	}

	previewMessage(): string {
		return this.message.slice(0, 10).concat('...');
	}
}

const message = new Message('Hello', 'WorldWorldWorld');
const message2 = new Message('World2', 'HelloHelloHello');

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<div>
					{message.title}: {message.previewMessage()} <br />{' '}
					{message.messageStatus}
				</div>
				<div>
					{message2.title}: {message2.previewMessage()} <br />{' '}
					{message2.messageStatus}
				</div>
			</header>
		</div>
	);
}

export default App;
