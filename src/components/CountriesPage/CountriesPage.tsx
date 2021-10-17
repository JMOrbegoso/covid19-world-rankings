import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Continent } from '../../entities';
import { getContinents } from '../../services';
import { LoadingPage, NavButtonsGroup, PageHeader } from '../../components';
import './CountriesPage.css';

export function CountriesPage(): JSX.Element {
	const [continents, setContinents] = useState<Continent[]>([]);

	useEffect(() => {
		getContinents().then((continents) => {
			setContinents(continents);
		});
	}, []);

	return continents ? (
		<div className="page">
			<Helmet>
				<title>COVID-19 Rankings | Countries</title>
			</Helmet>

			<PageHeader title="Countries" />

			<section id="countries">
				<NavButtonsGroup
					relativeUrl="countries"
					keys={continents
						.map((c) => c.getCountries)
						.flatMap((c) => c)
						.sort((c1, c2) => (c1 > c2 ? 1 : -1))}
				/>
			</section>
		</div>
	) : (
		<LoadingPage />
	);
}
