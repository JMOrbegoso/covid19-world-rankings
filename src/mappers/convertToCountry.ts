import { Country } from '../entities';
import { Country as ApiCountry } from '../entities/api';

export function convertToCountry(apiCountry: ApiCountry): Country {
	return new Country(
		apiCountry.country,
		apiCountry.countryInfo.flag,
		apiCountry.population,
		apiCountry.todayCases,
		apiCountry.todayDeaths,
		apiCountry.cases,
		apiCountry.deaths,
		apiCountry.tests,
		apiCountry.casesPerOneMillion,
		apiCountry.deathsPerOneMillion,
		apiCountry.recoveredPerOneMillion,
		apiCountry.testsPerOneMillion,
		apiCountry.oneCasePerPeople,
		apiCountry.oneDeathPerPeople,
		apiCountry.oneTestPerPeople,
	);
}
