import axios from 'axios';
import { Country } from '../entities/country';
import { Country as ApiCountry } from '../entities/api';
import { convertToCountry } from '../mappers';

const baseUrl = 'https://disease.sh/v3/covid-19/countries';

export async function getCountries(countries: string[]): Promise<Country[]> {
	const url = `${baseUrl}/${countries.join(',')}`;
	return axios
		.get(url)
		.then((res) => res.data)
		.then((data) => {
			const apiCountries = <ApiCountry[]>data;
			return apiCountries.map((country) => convertToCountry(country));
		});
}
