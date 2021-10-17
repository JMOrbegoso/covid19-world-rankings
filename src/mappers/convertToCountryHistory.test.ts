import { convertToCountryHistory } from '.';
import { CountryHistory as ApiCountryHistory } from '../entities/api';

describe('mappers', () => {
	describe('convertToCountryHistory', () => {
		it('should return a valid country history', () => {
			const apiCountryHistory: ApiCountryHistory = {
				country: 'Canada',
				province: [
					'alberta',
					'british columbia',
					'diamond princess',
					'grand princess',
					'manitoba',
					'new brunswick',
					'newfoundland and labrador',
					'northwest territories',
					'nova scotia',
					'nunavut',
					'ontario',
					'prince edward island',
					'quebec',
					'repatriated travellers',
					'saskatchewan',
					'yukon',
				],
				timeline: {
					cases: {
						'10/6/21': 1655406,
						'10/7/21': 1659517,
						'10/8/21': 1663716,
						'10/9/21': 1665312,
						'10/10/21': 1666908,
						'10/11/21': 1668009,
						'10/12/21': 1675805,
						'10/13/21': 1678511,
						'10/14/21': 1681669,
						'10/15/21': 1684435,
					},
					deaths: {
						'10/6/21': 28165,
						'10/7/21': 28196,
						'10/8/21': 28239,
						'10/9/21': 28246,
						'10/10/21': 28254,
						'10/11/21': 28264,
						'10/12/21': 28343,
						'10/13/21': 28422,
						'10/14/21': 28474,
						'10/15/21': 28521,
					},
					recovered: {
						'10/6/21': 0,
						'10/7/21': 0,
						'10/8/21': 0,
						'10/9/21': 0,
						'10/10/21': 0,
						'10/11/21': 0,
						'10/12/21': 0,
						'10/13/21': 0,
						'10/14/21': 0,
						'10/15/21': 0,
					},
				},
			};

			const countryHistory = convertToCountryHistory(apiCountryHistory);

			expect(countryHistory.getName).toBe(apiCountryHistory.country);
			expect(countryHistory.getHistory).toHaveLength(10);
			expect(countryHistory.getHistory[0].cases).toBe(1655406);
			expect(countryHistory.getHistory[0].deaths).toBe(28165);
			expect(countryHistory.getHistory[9].cases).toBe(1684435);
			expect(countryHistory.getHistory[9].deaths).toBe(28521);
		});
	});
});
