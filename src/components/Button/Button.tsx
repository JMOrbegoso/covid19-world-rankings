import React from 'react';
import './Button.css';

type Props = {
	text: string;
};

export function Button(props: Props): JSX.Element {
	return <button>{props.text}</button>;
}
