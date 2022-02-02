import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Continent } from '../../entities';
import { getContinent, getCountries } from '../../services';
import {
	HorizontalBarChartData,
	HorizontalBarChart,
	InfoTable,
	LoadingPage,
	NavButtonsGroup,
	PageHeader,
} from '../../components';
import './ContinentPage.css';

export function ContinentPage(): JSX.Element {
	const params = useParams();
	const continentName = params.continentName;
	const rankingPositions = 10;

	const [continent, setContinent] = useState<Continent>();
	const [casesChartData, setCasesChartData] =
		useState<HorizontalBarChartData>();
	const [deathsChartData, setDeathsChartData] =
		useState<HorizontalBarChartData>();
	const [testsChartData, setTestsChartData] =
		useState<HorizontalBarChartData>();

	useEffect(() => {
		if (!continentName) {
			return;
		}
		getContinent(continentName).then((continent) => {
			setContinent(continent);

			getCountries(continent.getCountries).then((countries) => {
				setCasesChartData({
					labels: countries
						.sort((c1, c2) => (c1.getCases > c2.getCases ? -1 : 1))
						.slice(0, rankingPositions)
						.map((c) => c.getName),
					datasets: countries
						.sort((c1, c2) => (c1.getCases > c2.getCases ? -1 : 1))
						.slice(0, rankingPositions)
						.map((c) => c.getCases),
					datasetLabel: 'Cases',
					backgroundColor: '#FF0000',
				});

				setDeathsChartData({
					labels: countries
						.sort((c1, c2) => (c1.getDeaths > c2.getDeaths ? -1 : 1))
						.slice(0, rankingPositions)
						.map((c) => c.getName),
					datasets: countries
						.sort((c1, c2) => (c1.getDeaths > c2.getDeaths ? -1 : 1))
						.slice(0, rankingPositions)
						.map((c) => c.getDeaths),
					datasetLabel: 'Deaths',
					backgroundColor: '#000000',
				});

				setTestsChartData({
					labels: countries
						.sort((c1, c2) => (c1.getTests > c2.getTests ? -1 : 1))
						.slice(0, rankingPositions)
						.map((c) => c.getName),
					datasets: countries
						.sort((c1, c2) => (c1.getTests > c2.getTests ? -1 : 1))
						.slice(0, rankingPositions)
						.map((c) => c.getTests),
					datasetLabel: 'Tests',
					backgroundColor: '#00FF00',
				});
			});
		});
	}, [continentName]);

	return continent ? (
		<div className="page">
			<Helmet>
				<title>{`COVID-19 Rankings | ${continent.getName}`}</title>
			</Helmet>

			<div className="page-section">
				<PageHeader title={continent.getName} />
			</div>

			<div className="page-section">
				<InfoTable
					data={[
						{
							property: 'Population (Inhabitants)',
							value: continent.getPopulation,
						},
						{ property: 'Total cases', value: continent.getCases },
						{ property: 'Total deaths', value: continent.getDeaths },
						{ property: 'Total tests', value: continent.getTests },
						{
							property: 'Cases per 1 million inhabitants',
							value: continent.getCasesPerOneMillion,
						},
						{
							property: 'Deaths per 1 million inhabitants',
							value: continent.getDeathsPerOneMillion,
						},
						{
							property: 'Tests per 1 million inhabitants',
							value: continent.getTestsPerOneMillion,
						},
					]}
				/>

				<div className="page-section"></div>
				{casesChartData && (
					<HorizontalBarChart
						title="Countries with the highest number of COVID-19 infected"
						chartData={casesChartData}
					/>
				)}
			</div>

			<div className="page-section">
				{deathsChartData && (
					<HorizontalBarChart
						title="Countries with the highest number of COVID-19 deaths"
						chartData={deathsChartData}
					/>
				)}
			</div>

			<div className="page-section">
				{testsChartData && (
					<HorizontalBarChart
						title="Countries with the highest number of COVID-19 tests"
						chartData={testsChartData}
					/>
				)}
			</div>

			<div className="page-section">
				<NavButtonsGroup
					relativeUrl="countries"
					keys={continent.getCountries}
				/>
			</div>
		</div>
	) : (
		<LoadingPage />
	);
}
