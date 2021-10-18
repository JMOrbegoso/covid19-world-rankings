import { CountryHistory } from '../entities';
import { CountryHistory as ApiCountryHistory } from '../entities/api';

export function convertToCountryHistory(
	apiCountryHistory: ApiCountryHistory,
): CountryHistory {
	const dates: string[] = Object.keys(apiCountryHistory.timeline.cases);

	return new CountryHistory(
		apiCountryHistory.country,
		dates
			.map((date) => {
				return {
					date: new Date(date),
					cases: apiCountryHistory.timeline.cases[date] ?? 0,
					deaths: apiCountryHistory.timeline.deaths[date] ?? 0,
				};
			})
			.sort((c1, c2) => (c1.date > c2.date ? 1 : -1)),
	);
}
