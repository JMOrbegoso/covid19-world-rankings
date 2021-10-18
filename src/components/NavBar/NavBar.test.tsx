import React from 'react';
import { render, screen } from '@testing-library/react';
import { NavBar } from './NavBar';

test('renders nav bar', () => {
	// Arrange
	const pageTitle = 'COVID-19 World Rankings';

	// Act
	render(<NavBar />);
	const navBarTitle = screen.getByText(pageTitle);

	// Assert
	expect(navBarTitle).toBeInTheDocument();
});
