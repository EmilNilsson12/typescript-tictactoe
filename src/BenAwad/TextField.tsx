import React from 'react';

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
	person: Person;
}

const TextField: React.FC<Props> = (props: Props) => {
	return (
		<div>
			<h1>TextField component</h1>
			user:{' '}
			<em>
				{props.person.firstName} {props.person.lastName}
			</em>{' '}
			is logged in
			<input value={props.text} />
		</div>
	);
};

export default TextField;
