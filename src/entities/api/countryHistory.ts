export type CountryHistory = {
	country: string;
	province: string[];
	timeline: {
		cases: { [date: string]: number };
		deaths: { [date: string]: number };
		recovered: { [date: string]: number };
	};
};
