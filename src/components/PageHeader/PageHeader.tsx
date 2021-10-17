import React from 'react';
import './PageHeader.css';

type Props = {
	title: string;
};

export function PageHeader(props: Props): JSX.Element {
	return <h1 className="pageheader">{props.title}</h1>;
}
