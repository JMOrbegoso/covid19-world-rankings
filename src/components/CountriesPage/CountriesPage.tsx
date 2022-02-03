import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Continent } from '../../entities';
import { ApiResponse, getContinents } from '../../services';
import {
	LoadingPage,
	NavButtonsGroup,
	PageHeader,
	PageNotFound,
} from '../../components';
import './CountriesPage.css';

export function CountriesPage(): JSX.Element {
	const [continents, setContinents] = useState<ApiResponse<Continent[]>>();

	useEffect(() => {
		getContinents().then((continents) => {
			setContinents(continents);
		});
	}, []);

	return continents ? (
		continents.data ? (
			<div className="page">
				<Helmet>
					<title>COVID-19 Rankings | Countries</title>
				</Helmet>

				<PageHeader title="Countries" />

				<section id="countries">
					<NavButtonsGroup
						relativeUrl="countries"
						keys={continents.data
							.map((c) => c.getCountries)
							.flatMap((c) => c)
							.sort((c1, c2) => (c1 > c2 ? 1 : -1))}
					/>
				</section>
			</div>
		) : (
			<PageNotFound />
		)
	) : (
		<LoadingPage />
	);
}
