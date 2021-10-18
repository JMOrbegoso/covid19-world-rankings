import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button', () => {
	// Arrange
	const text = 'button 1';

	// Act
	render(<Button text={text} />);
	const buttonText = screen.getByText(text);

	// Assert
	expect(buttonText).toBeInTheDocument();
});
