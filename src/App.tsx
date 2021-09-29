import './App.css';
import React, { useEffect, useState, useRef } from 'react';

import Game from './Components/Game';
import Start from './Components/Start';
import Finished from './Components/Finished';

import useTicTacToe from './CustomHooks/useTicTacToe';
import TextField from './BenAwad/TextField';

function App() {
	const { board, gameStatus, winner, handleClick, handleRestart, handleStart } =
		useTicTacToe();

	const [myText, setMyText] = useState<string>('Hello from parent-component');

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
				text={myText}
				person={{ firstName: 'Janne', lastName: 'Kemi' }}
				handleChange={(e) => {
					console.log(e.target.value);
					setMyText(e.target.value);
				}}
			/>
		</div>
	);
}

export default App;
