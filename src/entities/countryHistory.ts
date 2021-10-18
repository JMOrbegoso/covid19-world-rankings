export class CountryHistory {
	constructor(
		private name: string,
		private history: { date: Date; cases: number; deaths: number }[],
	) {}

	public get getName(): string {
		return this.name;
	}

	public get getHistory(): { date: Date; cases: number; deaths: number }[] {
		return this.history;
	}
}
