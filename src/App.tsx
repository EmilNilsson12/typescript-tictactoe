import React from 'react';
import logo from './logo.svg';
import './App.css';

export class Message {
	title: string;
	message: string;
	isSent: boolean;

	constructor(title: string, message: string) {
		this.title = title;
		this.message = message;
		this.isSent = false;
	}

	previewMessage(): string {
		return this.message.slice(0, 10).concat('...');
	}
}

const message = new Message(
	'Hello',
	'WdorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorld'
);

function App() {
	const message1 = { title: undefined, message: undefined };
	const message2 = { title: undefined, message: undefined };
	const message3 = { title: undefined, message: undefined };

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<div>
					{message.title}: {message.previewMessage()}
				</div>
				<div>
					{message1.title}: {message1.message}
				</div>
				<div>
					{message2.title}: {message2.message}
				</div>
				<div>
					{message3.title}: {message3.message}
				</div>
			</header>
		</div>
	);
}

export default App;
