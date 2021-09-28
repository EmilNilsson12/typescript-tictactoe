import Square from './Square';

interface Props {
	board: Array<string>;
	handleClick(index: number): void;
}

function Game(props: Props) {
	const { board, handleClick } = props;

	const styles = {
		board: {
			display: 'grid',
			gridTemplateColumns: 'repeat(3, 1fr)',
			width: '300px',
		},
	};

	return (
		<div style={styles.board}>
			{board.map((value, index) => (
				<Square index={index} value={value} handleClick={handleClick} />
			))}
		</div>
	);
}

export default Game;
