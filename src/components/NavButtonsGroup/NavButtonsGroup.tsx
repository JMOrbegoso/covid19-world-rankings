import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '..';
import './NavButtonsGroup.css';

type Props = {
	relativeUrl: string;
	keys: string[];
};

export function NavButtonsGroup(props: Props): JSX.Element {
	return (
		<div className="nav-buttons-group">
			{props.keys.map((key) => (
				<RouterLink key={key} to={`/${props.relativeUrl}/${key}`}>
					<Button text={key} />
				</RouterLink>
			))}
		</div>
	);
}
