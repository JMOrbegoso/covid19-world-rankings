import { ApiResponse } from '.';

describe('api-response', () => {
	it('create a valid api response', () => {
		// Arrange
		const data = 'data';

		// Act
		const result = ApiResponse.create(data);

		// Assert
		expect(result).toBeTruthy();
		expect(result.isValid).toBeTruthy();
		expect(result.data).toBeTruthy();
		expect(result.data).toBe('data');
	});

	it('create an invalid api response', () => {
		// Arrange

		// Act
		const result = ApiResponse.createInvalid();

		// Assert
		expect(result).toBeTruthy();
		expect(result.isValid).toBeFalsy();
		expect(result.data).toBeFalsy();
	});
});
