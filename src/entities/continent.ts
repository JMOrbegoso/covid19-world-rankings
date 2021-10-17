export class Continent {
	constructor(
		private name: string,
		private population: number,
		private countries: string[],
		// Today
		private todayCases: number,
		private todayDeaths: number,
		// Total
		private cases: number,
		private deaths: number,
		private tests: number,
		// Per one million
		private casesPerOneMillion: number,
		private deathsPerOneMillion: number,
		private recoveredPerOneMillion: number,
		private testsPerOneMillion: number,
	) {}

	public get getName(): string {
		return this.name;
	}
	public get getPopulation(): number {
		return this.population;
	}
	public get getCountries(): string[] {
		return this.countries;
	}
	public get getTodayCases(): number {
		return this.todayCases;
	}
	public get getTodayDeaths(): number {
		return this.todayDeaths;
	}
	public get getCases(): number {
		return this.cases;
	}
	public get getDeaths(): number {
		return this.deaths;
	}
	public get getTests(): number {
		return this.tests;
	}
	public get getCasesPerOneMillion(): number {
		return this.casesPerOneMillion;
	}
	public get getDeathsPerOneMillion(): number {
		return this.deathsPerOneMillion;
	}
	public get getRecoveredPerOneMillion(): number {
		return this.recoveredPerOneMillion;
	}
	public get getTestsPerOneMillion(): number {
		return this.testsPerOneMillion;
	}
}
