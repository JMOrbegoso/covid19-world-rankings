import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Country } from '../../entities';
import { getCountry, getCountryHistory } from '../../services';
import {
	InfoTable,
	LineChart,
	LineChartData,
	LoadingPage,
	PageHeader,
} from '../../components';
import './CountryPage.css';

export function CountryPage(): JSX.Element {
	const params = useParams();
	const countryName = params.countryName;

	const [country, setCountry] = useState<Country>();
	const [countryHistoryChartData, setCountryHistoryChartData] =
		useState<LineChartData>();

	useEffect(() => {
		if (!countryName) {
			return;
		}
		getCountry(countryName).then((country) => {
			setCountry(country);
		});
		getCountryHistory(countryName).then((countryHistory) => {
			setCountryHistoryChartData({
				labels: countryHistory.getHistory.map((history) =>
					history.date.toDateString(),
				),
				datasets: [
					{
						label: 'Cases',
						values: countryHistory.getHistory.map((history) => history.cases),
						color: '#FF0000',
					},
					{
						label: 'Deaths',
						values: countryHistory.getHistory.map((history) => history.deaths),
						color: '#000000',
					},
				],
			});
		});
	}, [countryName]);

	return country ? (
		<div className="page">
			<Helmet>
				<title>{`COVID-19 Rankings | ${country.getName}`}</title>
			</Helmet>

			<div className="page-section">
				<img
					className="country-flag"
					alt={`${country.getName} flag`}
					src={country.getFlag}
				/>
			</div>

			<div className="page-section">
				<PageHeader title={country.getName} />
			</div>

			<div className="page-section">
				<InfoTable
					data={[
						{
							property: 'Population (Inhabitants)',
							value: country.getPopulation,
						},
						{ property: 'Total cases', value: country.getCases },
						{ property: 'Total deaths', value: country.getDeaths },
						{ property: 'Total tests', value: country.getTests },
						{
							property: 'Cases per 1 million inhabitants',
							value: country.getCasesPerOneMillion,
						},
						{
							property: 'Deaths per 1 million inhabitants',
							value: country.getDeathsPerOneMillion,
						},
						{
							property: 'Tests per 1 million inhabitants',
							value: country.getTestsPerOneMillion,
						},
						{
							property: 'One case per X inhabitants',
							value: country.getOneCasePerPeople,
						},
						{
							property: 'One death per X inhabitants',
							value: country.getOneDeathPerPeople,
						},
						{
							property: 'One test per X inhabitants',
							value: country.getOneTestPerPeople,
						},
					]}
				/>
			</div>

			<div className="page-section">
				{countryHistoryChartData && (
					<LineChart
						title="COVID-19 Historical Curve"
						chartData={countryHistoryChartData}
					/>
				)}
			</div>
		</div>
	) : (
		<LoadingPage />
	);
}
