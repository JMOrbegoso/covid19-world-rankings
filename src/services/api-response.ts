export class ApiResponse<T> {
	private constructor(
		public readonly isValid: boolean,
		public readonly data?: T,
	) {}

	public static create<T>(data: T): ApiResponse<T> {
		return new ApiResponse<T>(true, data);
	}

	public static createInvalid<T>(): ApiResponse<T> {
		return new ApiResponse<T>(false, undefined);
	}
}
