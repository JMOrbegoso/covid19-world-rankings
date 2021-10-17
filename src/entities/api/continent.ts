export type Continent = {
	updated: number;
	continent: string;
	population: number;
	countries: string[];
	// Today
	todayCases: number;
	todayDeaths: number;
	todayRecovered: number;
	// Total
	cases: number;
	deaths: number;
	recovered: number;
	tests: number;
	// Per one million
	casesPerOneMillion: number;
	deathsPerOneMillion: number;
	recoveredPerOneMillion: number;
	testsPerOneMillion: number;
};
