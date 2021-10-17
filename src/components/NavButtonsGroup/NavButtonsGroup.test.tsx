import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { NavButtonsGroup } from './NavButtonsGroup';

test('renders nav buttons group', () => {
	// Arrange
	const baseUrl = 'countries';
	const country1 = 'canada';
	const country2 = 'mexico';

	// Act
	render(
		<BrowserRouter>
			<NavButtonsGroup relativeUrl={baseUrl} keys={[country1, country2]} />
		</BrowserRouter>,
	);
	const country1Button = screen.getByText(country1);
	const country2Button = screen.getByText(country2);

	// Assert
	expect(country1Button).toBeInTheDocument();
	expect(country2Button).toBeInTheDocument();
});
