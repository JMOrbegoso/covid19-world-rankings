import axios from 'axios';
import { Country } from '../entities/country';
import { Country as ApiCountry } from '../entities/api';
import { convertToCountry } from '../mappers';
import { ApiResponse } from '.';

const baseUrl = 'https://disease.sh/v3/covid-19/countries';

export async function getCountry(
	countryName: string,
): Promise<ApiResponse<Country>> {
	const url = `${baseUrl}/${countryName}?strict=true`;
	return axios
		.get(url)
		.then((res) => res.data)
		.then((data) => {
			const apiCountry = <ApiCountry>data;
			const country = convertToCountry(apiCountry);
			return ApiResponse.create(country);
		})
		.catch(() => ApiResponse.createInvalid());
}
