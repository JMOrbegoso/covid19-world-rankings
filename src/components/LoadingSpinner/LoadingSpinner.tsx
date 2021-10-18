import React from 'react';
import './LoadingSpinner.css';

export function LoadingSpinner(): JSX.Element {
	return (
		<div className="loading-container">
			<div className="loading-spinner"></div>
		</div>
	);
}
