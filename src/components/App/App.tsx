import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
	Footer,
	MainPage,
	NavBar,
	ContinentsPage,
	ContinentPage,
	CountriesPage,
	CountryPage,
} from '..';
import './App.css';

export function App(): JSX.Element {
	return (
		<BrowserRouter>
			<div className="app">
				<div className="app-navbar">
					<NavBar />
				</div>

				<div className="app-content">
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/continents/" element={<ContinentsPage />} />
						<Route
							path="/continents/:continentName"
							element={<ContinentPage />}
						/>
						<Route path="/countries/" element={<CountriesPage />} />
						<Route path="/countries/:countryName" element={<CountryPage />} />
					</Routes>
				</div>

				<div className="app-footer">
					<Footer />
				</div>
			</div>
		</BrowserRouter>
	);
}
