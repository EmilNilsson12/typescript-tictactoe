import { useState } from 'react';

interface Props {
	handleStart(players: string[]): void;
}

function Start(props: Props) {
	const { handleStart } = props;

	const [players, setPlayers] = useState(['', '']);

	const handleSubmit = (evt: any) => {
		evt.preventDefault();
		handleStart(players);
	};

	const handleInput = (evt: any, index: number) => {
		const newPlayers = [...players];
		newPlayers.splice(index, 1, evt.target.value);
		setPlayers(newPlayers);
	};

	return (
		<div>
			<h1>Start</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Player 1:
					<br />
					<input
						type='text'
						required
						value={players[0]}
						onChange={(e) => handleInput(e, 0)}
					/>
				</label>
				<br />
				<label>
					Player 2:
					<br />
					<input
						type='text'
						required
						value={players[1]}
						onChange={(e) => handleInput(e, 1)}
					/>
				</label>
				<br />
				<button type='submit'>Starta</button>
			</form>
		</div>
	);
}

export default Start;
