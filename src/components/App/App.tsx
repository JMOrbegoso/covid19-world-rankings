import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
					<Switch>
						<Route exact path="/" component={MainPage} />
						<Route exact path="/continents/" component={ContinentsPage} />
						<Route
							exact
							path="/continents/:continentName"
							component={ContinentPage}
						/>
						<Route exact path="/countries/" component={CountriesPage} />
						<Route
							exact
							path="/countries/:countryName"
							component={CountryPage}
						/>
					</Switch>
				</div>

				<div className="app-footer">
					<Footer />
				</div>
			</div>
		</BrowserRouter>
	);
}
