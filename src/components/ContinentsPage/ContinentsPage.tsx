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
import './ContinentsPage.css';

export function ContinentsPage(): JSX.Element {
	const [continents, setContinents] = useState<ApiResponse<Continent[]>>();

	useEffect(() => {
		getContinents().then((continents) => {
			setContinents(continents);
		});
	}, []);

	return continents ? (
		continents.isValid && continents.data ? (
			<div className="page">
				<Helmet>
					<title>COVID-19 Rankings | Continents</title>
				</Helmet>

				<PageHeader title="Continents" />

				<section id="continents">
					<NavButtonsGroup
						relativeUrl="continents"
						keys={continents.data
							.map((c) => c.getName)
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
