import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageHeader } from './PageHeader';

test('renders page header', () => {
	// Arrange
	const title = 'Page Title';

	// Act
	render(<PageHeader title={title} />);
	const pageTitle = screen.getByText(title);

	// Assert
	expect(pageTitle).toBeInTheDocument();
});
