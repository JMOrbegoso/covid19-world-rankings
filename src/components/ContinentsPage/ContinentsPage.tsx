import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Continent } from '../../entities';
import { getContinents } from '../../services';
import { LoadingPage, NavButtonsGroup, PageHeader } from '../../components';
import './ContinentsPage.css';

export function ContinentsPage(): JSX.Element {
	const [continents, setContinents] = useState<Continent[]>([]);

	useEffect(() => {
		getContinents().then((continents) => {
			setContinents(continents);
		});
	}, []);

	return continents ? (
		<div className="page">
			<Helmet>
				<title>COVID-19 Rankings | Continents</title>
			</Helmet>

			<PageHeader title="Continents" />

			<section id="continents">
				<NavButtonsGroup
					relativeUrl="continents"
					keys={continents
						.map((c) => c.getName)
						.sort((c1, c2) => (c1 > c2 ? 1 : -1))}
				/>
			</section>
		</div>
	) : (
		<LoadingPage />
	);
}
