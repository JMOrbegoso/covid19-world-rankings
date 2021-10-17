import React from 'react';
import { LoadingSpinner } from '..';
import './LoadingPage.css';

export function LoadingPage(): JSX.Element {
	return (
		<div className="loading-page">
			<LoadingSpinner />
		</div>
	);
}
