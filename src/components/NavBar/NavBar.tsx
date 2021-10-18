import React from 'react';
import './NavBar.css';

const navigationOptions = [
	{ name: 'COVID-19 World Rankings', href: '/' },
	{ name: 'Continents', href: '/continents' },
	{ name: 'Countries', href: '/countries' },
];

const aboutOptions = [
	{ name: 'My Portfolio', href: 'https://www.jmorbegoso.com' },
	{ name: 'My Blog', href: 'https://blog.jmorbegoso.com' },
	{ name: 'My GitHub', href: 'https://github.com/JMOrbegoso/' },
];

export function NavBar(): JSX.Element {
	return (
		<nav>
			<ul>
				{navigationOptions.map((option) => (
					<li key={option.name}>
						<a href={option.href}>{option.name}</a>
					</li>
				))}

				<li className="dropdown">
					About
					<div className="dropdown-content">
						{aboutOptions.map((option) => (
							<a
								key={option.name}
								href={option.href}
								target="_blank"
								rel="noreferrer"
							>
								{option.name}
							</a>
						))}
					</div>
				</li>
			</ul>
		</nav>
	);
}
