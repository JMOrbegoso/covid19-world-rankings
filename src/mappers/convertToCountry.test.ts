import { convertToCountry } from '.';
import { Country as ApiCountry } from '../entities/api';

describe('mappers', () => {
	describe('convertToCountry', () => {
		it('should return a valid country', () => {
			const apiCountry: ApiCountry = {
				updated: 1634431015477,
				country: 'Canada',
				continent: 'North America',
				population: 38168800,
				countryInfo: {
					flag: 'https://disease.sh/assets/img/flags/ca.png',
				},
				cases: 1678516,
				deaths: 28482,
				tests: 44836340,
				recovered: 1614746,

				todayCases: 1643,
				todayDeaths: 14,
				todayRecovered: 1123,

				oneCasePerPeople: 23,
				oneDeathPerPeople: 1340,
				oneTestPerPeople: 1,

				casesPerOneMillion: 43976,
				deathsPerOneMillion: 746,
				testsPerOneMillion: 1174686,
				recoveredPerOneMillion: 42305.39,
			};

			const country = convertToCountry(apiCountry);

			expect(country.getPopulation).toBe(apiCountry.population);
			expect(country.getName).toBe(apiCountry.country);
			expect(country.getFlag).toBe(apiCountry.countryInfo.flag);
			expect(country.getCases).toBe(apiCountry.cases);
			expect(country.getDeaths).toBe(apiCountry.deaths);
			expect(country.getTests).toBe(apiCountry.tests);
			expect(country.getTodayCases).toBe(apiCountry.todayCases);
			expect(country.getTodayDeaths).toBe(apiCountry.todayDeaths);
			expect(country.getCasesPerOneMillion).toBe(apiCountry.casesPerOneMillion);
			expect(country.getDeathsPerOneMillion).toBe(
				apiCountry.deathsPerOneMillion,
			);
			expect(country.getTestsPerOneMillion).toBe(apiCountry.testsPerOneMillion);
			expect(country.getOneCasePerPeople).toBe(apiCountry.oneCasePerPeople);
			expect(country.getOneDeathPerPeople).toBe(apiCountry.oneDeathPerPeople);
		});
	});
});
