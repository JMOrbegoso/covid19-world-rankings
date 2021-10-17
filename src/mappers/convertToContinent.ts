import { Continent } from '../entities';
import { Continent as ApiContinent } from '../entities/api';

export function convertToContinent(apiContinent: ApiContinent): Continent {
	return new Continent(
		apiContinent.continent,
		apiContinent.population,
		apiContinent.countries,
		apiContinent.todayCases,
		apiContinent.todayDeaths,
		apiContinent.cases,
		apiContinent.deaths,
		apiContinent.tests,
		apiContinent.casesPerOneMillion,
		apiContinent.deathsPerOneMillion,
		apiContinent.recoveredPerOneMillion,
		apiContinent.testsPerOneMillion,
	);
}
