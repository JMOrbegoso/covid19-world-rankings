import { convertToContinent } from '.';
import { Continent as ApiContinent } from '../entities/api';

describe('mappers', () => {
	describe('convertToContinent', () => {
		it('should return a valid continent', () => {
			const apiContinent: ApiContinent = {
				updated: 1634431016281,
				cases: 61395614,
				todayCases: 167072,
				deaths: 1259281,
				todayDeaths: 2206,
				recovered: 56051138,
				todayRecovered: 127699,
				casesPerOneMillion: 82056.35,
				deathsPerOneMillion: 1683.05,
				tests: 1356858520,
				testsPerOneMillion: 1813465.92,
				population: 748212857,
				continent: 'Europe',
				recoveredPerOneMillion: 74913.36,
				countries: [
					'Albania',
					'Andorra',
					'Austria',
					'Belarus',
					'Belgium',
					'Bosnia',
					'Bulgaria',
					'Channel Islands',
					'Croatia',
					'Czechia',
					'Denmark',
					'Estonia',
					'Faroe Islands',
					'Finland',
					'France',
					'Germany',
					'Gibraltar',
					'Greece',
					'Holy See (Vatican City State)',
					'Hungary',
					'Iceland',
					'Ireland',
					'Isle of Man',
					'Italy',
					'Latvia',
					'Liechtenstein',
					'Lithuania',
					'Luxembourg',
					'Macedonia',
					'Malta',
					'Moldova',
					'Monaco',
					'Montenegro',
					'Netherlands',
					'Norway',
					'Poland',
					'Portugal',
					'Romania',
					'Russia',
					'San Marino',
					'Serbia',
					'Slovakia',
					'Slovenia',
					'Spain',
					'Sweden',
					'Switzerland',
					'UK',
					'Ukraine',
				],
			};

			const continent = convertToContinent(apiContinent);

			expect(continent.getPopulation).toBe(apiContinent.population);
			expect(continent.getName).toBe(apiContinent.continent);
			expect(continent.getCases).toBe(apiContinent.cases);
			expect(continent.getDeaths).toBe(apiContinent.deaths);
			expect(continent.getTests).toBe(apiContinent.tests);
			expect(continent.getTodayCases).toBe(apiContinent.todayCases);
			expect(continent.getTodayDeaths).toBe(apiContinent.todayDeaths);
			expect(continent.getCasesPerOneMillion).toBe(
				apiContinent.casesPerOneMillion,
			);
			expect(continent.getDeathsPerOneMillion).toBe(
				apiContinent.deathsPerOneMillion,
			);
			expect(continent.getTestsPerOneMillion).toBe(
				apiContinent.testsPerOneMillion,
			);
			expect(continent.getCountries).toBe(apiContinent.countries);
		});
	});
});
