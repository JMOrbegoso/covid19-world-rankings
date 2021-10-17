import React from 'react';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

test('renders hero', () => {
	// Arrange

	// Act
	render(<Hero />);
	const subheader = screen.getByText('World Rankings');

	// Assert
	expect(subheader).toBeInTheDocument();
});
