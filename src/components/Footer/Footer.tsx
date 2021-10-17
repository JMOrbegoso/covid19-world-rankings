import React from 'react';
import './Footer.css';

export function Footer(): JSX.Element {
	return (
		<footer>
			<p className="api-credits">
				All information on this website is public and obtained from Worldometers
				and Johns Hopkins University
			</p>
			<p className="author-info">Developed by JM Orbegoso</p>
			<a
				className="author-web"
				href="https://www.jmorbegoso.com"
				target="_blank"
				rel="noreferrer"
			>
				https://www.jmorbegoso.com
			</a>
		</footer>
	);
}
