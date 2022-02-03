import axios from 'axios';
import { Continent } from '../entities';
import { Continent as ApiContinent } from '../entities/api';
import { convertToContinent } from '../mappers';
import { ApiResponse } from '.';

const baseUrl = 'https://disease.sh/v3/covid-19/continents';

export async function getContinent(
	continentName: string,
): Promise<ApiResponse<Continent>> {
	const url = `${baseUrl}/${continentName}?strict=true`;
	return axios
		.get(url)
		.then((res) => res.data)
		.then((data) => {
			const apiContinent = <ApiContinent>data;
			const continent = convertToContinent(apiContinent);
			return ApiResponse.create(continent);
		})
		.catch(() => ApiResponse.createInvalid());
}
