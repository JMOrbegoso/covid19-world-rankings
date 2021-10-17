import React from 'react';
import './Hero.css';

export function Hero(): JSX.Element {
	return (
		<section className="hero">
			<div>
				<h1 className="hero-title">COVID-19</h1>

				<h2 className="hero-subtitle">World Rankings</h2>

				<h3 className="hero-description">
					Compare the countries status about the COVID-19
				</h3>

				<div className="hero-button">
					<a href="/continents">Continents</a>
					<a href="/countries">Countries</a>
				</div>
			</div>
		</section>
	);
}
