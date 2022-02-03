import axios from 'axios';
import { Continent } from '../entities/continent';
import { Continent as ApiContinent } from '../entities/api';
import { convertToContinent } from '../mappers';
import { ApiResponse } from '.';

const baseUrl = 'https://disease.sh/v3/covid-19/continents';

export async function getContinents(): Promise<ApiResponse<Continent[]>> {
	const url = `${baseUrl}`;
	return axios
		.get(url)
		.then((res) => res.data)
		.then((data) => {
			const apiContinents = <ApiContinent[]>data;
			const continents = apiContinents.map((continent) =>
				convertToContinent(continent),
			);
			return ApiResponse.create(continents);
		})
		.catch(() => ApiResponse.createInvalid());
}
