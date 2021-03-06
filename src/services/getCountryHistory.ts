import axios from 'axios';
import { CountryHistory } from '../entities';
import { CountryHistory as ApiCountryHistory } from '../entities/api';
import { convertToCountryHistory } from '../mappers';
import { ApiResponse } from '.';

const baseUrl = 'https://disease.sh/v3/covid-19/historical';

export async function getCountryHistory(
	countryName: string,
): Promise<ApiResponse<CountryHistory>> {
	const url = `${baseUrl}/${countryName}?lastdays=all`;
	return axios
		.get(url)
		.then((res) => res.data)
		.then((data) => {
			const apiCountryHistory = <ApiCountryHistory>data;
			const history = convertToCountryHistory(apiCountryHistory);
			return ApiResponse.create(history);
		})
		.catch(() => ApiResponse.createInvalid());
}
