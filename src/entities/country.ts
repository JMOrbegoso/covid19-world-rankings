export class Country {
	constructor(
		private name: string,
		private flag: string,
		private population: number,
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
		// Per people
		private oneCasePerPeople: number,
		private oneDeathPerPeople: number,
		private oneTestPerPeople: number,
	) {}

	public get getName(): string {
		return this.name;
	}
	public get getFlag(): string {
		return this.flag;
	}
	public get getPopulation(): number {
		return this.population;
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
	public get getOneCasePerPeople(): number {
		return this.oneCasePerPeople;
	}
	public get getOneDeathPerPeople(): number {
		return this.oneDeathPerPeople;
	}
	public get getOneTestPerPeople(): number {
		return this.oneTestPerPeople;
	}
}
