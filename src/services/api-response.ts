export class ApiResponse<T> {
	private constructor(public readonly data?: T) {}

	public static create<T>(data: T): ApiResponse<T> {
		return new ApiResponse<T>(data);
	}

	public static createInvalid<T>(): ApiResponse<T> {
		return new ApiResponse<T>(undefined);
	}
}
