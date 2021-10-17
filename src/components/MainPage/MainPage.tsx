import React from 'react';
import { Helmet } from 'react-helmet';
import { Hero } from '..';
import './MainPage.css';

export function MainPage(): JSX.Element {
	return (
		<div className="mainpage">
			<Helmet>
				<title>COVID-19 Rankings | World</title>
			</Helmet>

			<Hero />
		</div>
	);
}
