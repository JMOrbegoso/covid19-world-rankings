import React from 'react';
import { render, screen } from '@testing-library/react';
import { InfoTable, InfoTableData } from './InfoTable';

test('renders hero', () => {
	// Arrange
	const propertyName = 'Property 1';
	const data: InfoTableData[] = [{ property: propertyName, value: 1 }];
	// Act
	render(<InfoTable data={data} />);
	const propertyInTable = screen.getByText(propertyName);

	// Assert
	expect(propertyInTable).toBeInTheDocument();
});
