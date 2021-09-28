import './App.css';

import Game from './Components/Game';
import Start from './Components/Start';
import Finished from './Components/Finished';

import useTicTacToe from './CustomHooks/useTicTacToe';

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
		</div>
	);
}

export default App;
