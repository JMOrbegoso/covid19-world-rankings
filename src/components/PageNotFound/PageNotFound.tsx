import React from 'react';
import { Button } from '..';
import './PageNotFound.css';

export function PageNotFound(): JSX.Element {
	return (
		<section className="page-not-found-container">
			<div>
				<h1 className="page-not-found-title">404</h1>

				<h2 className="page-not-found-subtitle">PAGE NOT FOUND</h2>

				<a href="/">
					<Button text="BACK TO HOME PAGE" />
				</a>
			</div>
		</section>
	);
}
