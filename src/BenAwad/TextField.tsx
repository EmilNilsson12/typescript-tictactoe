import React, { useEffect, useState, useRef } from 'react';

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
	handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
	text: string;
}

const TextField: React.FC<Props> = ({ handleChange, person, text }) => {
	const [count, setCount] = useState<number | null | undefined | string>(5);
	const [myText, setMyText] = useState<TextNode>({ text: '5' });

	useEffect(() => {
		setCount(3);
		setMyText({ text: 't' });
	}, []);

	const inputRef = useRef<HTMLInputElement>(null);
	const divRef = useRef<HTMLDivElement>(null);

	return (
		<div ref={divRef}>
			<h1>TextField component</h1>
			user:{' '}
			<em>
				{person?.firstName} {person?.lastName}
			</em>{' '}
			is logged in
			<input value={text} ref={inputRef} onChange={handleChange} />
		</div>
	);
};

export default TextField;
