import React, { useEffect, useState } from 'react';
import { Interface } from 'readline';

interface Person {
	firstName: string;
	lastName: string;
}

interface Props {
	text: string;
	ok?: boolean;
	i?: number;
	fn?: (name: string) => string;
	obj1?: {
		property1: string;
		property2: string;
	};
	person?: Person;
}

interface TextNode {
	text: string;
}

const TextField: React.FC<Props> = (props: Props) => {
	const [count, setCount] = useState<number | null | undefined | string>(5);

	const [myText, setMyText] = useState<TextNode>({ text: '5' });

	useEffect(() => {
		setCount(3);
		setMyText({ text: 't' });
	}, []);

	return (
		<div>
			<h1>TextField component</h1>
			user:{' '}
			<em>
				{props.person?.firstName} {props.person?.lastName}
			</em>{' '}
			is logged in
			<input value={props.text} />
		</div>
	);
};

export default TextField;
