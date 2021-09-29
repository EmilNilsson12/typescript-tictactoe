import './App.css';

import Game from './Components/Game';
import Start from './Components/Start';
import Finished from './Components/Finished';

import useTicTacToe from './CustomHooks/useTicTacToe';
import TextField from './BenAwad/TextField';

function App() {
	const { board, gameStatus, winner, handleClick, handleRestart, handleStart } =
		useTicTacToe();

	return (
		<div className='App'>
			<h1>TicTacToe</h1>

			{gameStatus === 'started' && (
				<Game board={board} handleClick={handleClick} />
			)}
			{gameStatus === 'created' && <Start handleStart={handleStart} />}
			{gameStatus === 'finished' && (
				<Finished name={winner} handleRestart={handleRestart} />
			)}

			<TextField
				text='Hello from parent-component'
				person={{ firstName: 'Janne', lastName: 'Kemi' }}
			/>
		</div>
	);
}

export default App;
