import React, { Component } from 'react';
import Month from './Components/Month';

interface Props {}

interface State {}

class App extends Component<Props, State> {
	state = {
		events: [
			{ deadline: '2021-10-12', todo: 'Do stuff' },
			{ deadline: '2021-10-18', todo: 'Do stuff' },
			{ deadline: '2021-01-12', todo: 'Do stuff' },
			{ deadline: '2021-10-12', todo: 'Do stuff' },
			{ deadline: '2021-12-02', todo: 'Do stuff' },
			{ deadline: '2021-04-12', todo: 'Do stuff' },
			{ deadline: '2021-07-11', todo: 'Do stuff' },
		],
	};
	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<Month events={this.state.events} />
				</header>
			</div>
		);
	}
}

export default App;
