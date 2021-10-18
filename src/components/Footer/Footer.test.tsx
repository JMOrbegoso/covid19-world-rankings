import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

test('renders footer', () => {
	// Arrange
	const authorFullName = /jm orbegoso/i;

	// Act
	render(<Footer />);
	const author = screen.getByText(authorFullName);

	// Assert
	expect(author).toBeInTheDocument();
});
