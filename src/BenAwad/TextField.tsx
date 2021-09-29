import React from 'react';

interface Props {
	text: string;
}

const TextField: React.FC<Props> = (props: Props) => {
	return (
		<div>
			<h1>TextField component</h1>
			<input value={props.text} />
		</div>
	);
};

export default TextField;
