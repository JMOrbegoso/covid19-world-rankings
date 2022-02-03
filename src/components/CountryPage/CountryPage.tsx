import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Country } from '../../entities';
import { ApiResponse, getCountry, getCountryHistory } from '../../services';
import {
	InfoTable,
	LineChart,
	LineChartData,
	LoadingPage,
	PageHeader,
	PageNotFound,
} from '../../components';
import './CountryPage.css';

export function CountryPage(): JSX.Element {
	const params = useParams();
	const countryName = params.countryName;

	const [country, setCountry] = useState<ApiResponse<Country>>();
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
			if (!countryHistory.isValid || !countryHistory.data) {
				return;
			}

			setCountryHistoryChartData({
				labels: countryHistory.data.getHistory.map((history) =>
					history.date.toDateString(),
				),
				datasets: [
					{
						label: 'Cases',
						values: countryHistory.data.getHistory.map(
							(history) => history.cases,
						),
						color: '#FF0000',
					},
					{
						label: 'Deaths',
						values: countryHistory.data.getHistory.map(
							(history) => history.deaths,
						),
						color: '#000000',
					},
				],
			});
		});
	}, [countryName]);

	return country ? (
		country.isValid && country.data ? (
			<div className="page">
				<Helmet>
					<title>{`COVID-19 Rankings | ${country.data.getName}`}</title>
				</Helmet>

				<div className="page-section">
					<img
						className="country-flag"
						alt={`${country.data.getName} flag`}
						src={country.data.getFlag}
					/>
				</div>

				<div className="page-section">
					<PageHeader title={country.data.getName} />
				</div>

				<div className="page-section">
					<InfoTable
						data={[
							{
								property: 'Population (Inhabitants)',
								value: country.data.getPopulation,
							},
							{ property: 'Total cases', value: country.data.getCases },
							{ property: 'Total deaths', value: country.data.getDeaths },
							{ property: 'Total tests', value: country.data.getTests },
							{
								property: 'Cases per 1 million inhabitants',
								value: country.data.getCasesPerOneMillion,
							},
							{
								property: 'Deaths per 1 million inhabitants',
								value: country.data.getDeathsPerOneMillion,
							},
							{
								property: 'Tests per 1 million inhabitants',
								value: country.data.getTestsPerOneMillion,
							},
							{
								property: 'One case per X inhabitants',
								value: country.data.getOneCasePerPeople,
							},
							{
								property: 'One death per X inhabitants',
								value: country.data.getOneDeathPerPeople,
							},
							{
								property: 'One test per X inhabitants',
								value: country.data.getOneTestPerPeople,
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
			<PageNotFound />
		)
	) : (
		<LoadingPage />
	);
}
