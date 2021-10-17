export type Country = {
	updated: number;
	country: string;
	population: number;
	countryInfo: {
		flag: string;
	};
	continent: string;
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
	// Per people
	oneCasePerPeople: number;
	oneDeathPerPeople: number;
	oneTestPerPeople: number;
};
